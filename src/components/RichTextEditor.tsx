import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import ImageResize from 'tiptap-extension-resize-image';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Strike from '@tiptap/extension-strike';
import Code from '@tiptap/extension-code';
import CodeBlock from '@tiptap/extension-code-block';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import HardBreak from '@tiptap/extension-hard-break';
import Gapcursor from '@tiptap/extension-gapcursor';
import Dropcursor from '@tiptap/extension-dropcursor';
import { supabase } from '../supabase/client';
import { decode } from 'base64-arraybuffer';
import * as mammoth from 'mammoth';
import {
  Bold, Italic, Underline as UnderlineIcon, Heading1, Heading2, Heading3, List,
  ListOrdered, Quote, Link as LinkIcon, Undo, Redo, Image as ImageIcon,
  AlignLeft, AlignCenter, AlignRight, Palette, Highlighter, Type,
  Strikethrough, Code as CodeIcon, Table as TableIcon, Minus,
  Subscript as SubscriptIcon, Superscript as SuperscriptIcon,
  FileText, Upload, ChevronDown, X
} from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ value, onChange, placeholder = '粘贴 Word 或飞书文档内容到这里...' }: RichTextEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const wordInputRef = useRef<HTMLInputElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showHighlightPicker, setShowHighlightPicker] = useState(false);

  const uploadImage = useCallback(async (file: File): Promise<string> => {
    const ext = file.name.split('.').pop() || 'png';
    const path = `articles/${Date.now()}.${ext}`;
    
    const reader = new FileReader();
    const base64Promise = new Promise<string>((resolve) => {
      reader.onload = (e) => {
        const base64 = (e.target?.result as string).split(',')[1];
        resolve(base64);
      };
    });
    reader.readAsDataURL(file);
    const base64 = await base64Promise;
    
    const { error } = await supabase.storage
      .from('article-media')
      .upload(path, decode(base64), { contentType: file.type });
    
    if (error) throw error;
    
    const { data: { publicUrl } } = supabase.storage
      .from('article-media')
      .getPublicUrl(path);
    
    return publicUrl;
  }, []);

  const handleImageUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && editor) {
      try {
        const url = await uploadImage(file);
        editor.chain().focus().setImage({ src: url }).run();
      } catch (error) {
        console.error('图片上传失败:', error);
        alert('图片上传失败，请重试');
      }
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  // 处理Word文档上传
  const handleWordUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !editor) return;

    setIsProcessing(true);
    try {
      const arrayBuffer = await file.arrayBuffer();

      // 使用mammoth的原始XML转换来保留更多格式
      const result = await mammoth.convertToHtml({ arrayBuffer }, {
        styleMap: [
          "p[style-name='Heading 1'] => h1",
          "p[style-name='Heading 2'] => h2",
          "p[style-name='Heading 3'] => h3",
          "p[style-name='Heading 4'] => h4",
          "p[style-name='Heading 5'] => h5",
          "p[style-name='Heading 6'] => h6",
          "p[style-name='Title'] => h1",
          "p[style-name='Subtitle'] => h2",
          "r[style-name='Strong'] => strong",
          "r[style-name='Emphasis'] => em",
          "p[style-name='Quote'] => blockquote",
          "p[style-name='Intense Quote'] => blockquote",
        ],
      });

      // 后处理HTML以保留颜色样式
      let html = result.value;

      // mammoth转换后的HTML可能包含颜色信息在style属性中
      // 我们需要确保这些样式被保留
      html = html.replace(/<span\s+style="([^"]*)"/gi, (match, styles) => {
        // 保留color和background-color样式
        const colorMatch = styles.match(/color:\s*([^;]+)/i);
        const bgMatch = styles.match(/background(?:-color)?:\s*([^;]+)/i);

        let newStyles = '';
        if (colorMatch) newStyles += `color: ${colorMatch[1]};`;
        if (bgMatch) newStyles += `background-color: ${bgMatch[1]};`;

        return newStyles ? `<span style="${newStyles}"` : match;
      });

      // 插入转换后的HTML内容
      editor.commands.setContent(html, false);

      if (result.messages.length > 0) {
        console.log('Word转换消息:', result.messages);
      }

      // 提示用户：Word导入会丢失颜色，建议复制粘贴
      alert('文档已导入。注意：Word文件导入会丢失字体颜色和背景色。如需保留完整格式（包括颜色），请直接从Word复制内容后粘贴到编辑器中。');
    } catch (error) {
      console.error('Word文档解析失败:', error);
      alert('Word文档解析失败，请检查文件格式');
    } finally {
      setIsProcessing(false);
      if (wordInputRef.current) {
        wordInputRef.current.value = '';
      }
    }
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ 
        heading: { levels: [1, 2, 3, 4, 5, 6] },
        bulletList: { keepMarks: true, keepAttributes: true },
        orderedList: { keepMarks: true, keepAttributes: true },
        codeBlock: false,
        horizontalRule: false,
        hardBreak: false,
      }),
      Image.configure({ 
        inline: false,
        allowBase64: true,
      }),
      ImageResize,
      Placeholder.configure({ placeholder }),
      Link.configure({ 
        openOnClick: false,
        autolink: true,
      }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({ types: ['heading', 'paragraph', 'blockquote'] }),
      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: 'border-collapse border border-slate-300',
        },
      }),
      TableRow,
      TableCell.configure({
        HTMLAttributes: {
          class: 'border border-slate-300 p-2',
        },
      }),
      TableHeader.configure({
        HTMLAttributes: {
          class: 'border border-slate-300 p-2 bg-slate-100 font-bold',
        },
      }),
      Strike,
      Code,
      CodeBlock.configure({
        HTMLAttributes: {
          class: 'bg-slate-100 p-4 rounded-lg font-mono text-sm',
        },
      }),
      Subscript,
      Superscript,
      HorizontalRule,
      HardBreak,
      Gapcursor,
      Dropcursor,
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      handlePaste: (view, event) => {
        const items = Array.from(event.clipboardData?.items || []);
        const imageItem = items.find(item => item.type.startsWith('image/'));
        
        // 处理图片粘贴
        if (imageItem) {
          event.preventDefault();
          const file = imageItem.getAsFile();
          if (file) {
            uploadImage(file).then(url => {
              view.dispatch(view.state.tr.insert(view.state.selection.anchor, view.state.schema.nodes.image.create({ src: url })));
            });
          }
          return true;
        }

        // 处理HTML粘贴 - 让TipTap自动处理以保留格式
        const html = event.clipboardData?.getData('text/html');
        const text = event.clipboardData?.getData('text/plain');
        
        // 如果有HTML内容，让TipTap自动处理
        if (html && html.trim() && html.includes('<')) {
          // TipTap会自动解析HTML并保留支持的样式
          return false;
        }
        
        return false;
      },
      handleDrop: (view, event) => {
        const files = Array.from(event.dataTransfer?.files || []);
        const imageFile = files.find(file => file.type.startsWith('image/'));
        
        if (imageFile) {
          event.preventDefault();
          uploadImage(imageFile).then(url => {
            const { state } = view;
            const { selection } = state;
            view.dispatch(state.tr.insert(selection.from, view.state.schema.nodes.image.create({ src: url })));
          });
          return true;
        }
        return false;
      },
    },
  });

  // 当外部value变化时更新编辑器内容（用于编辑已有文章）
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value, false);
    }
  }, [editor, value]);

  if (!editor) return null;

  const toolbarBtn = (cmd: () => boolean, icon: React.ReactNode, active?: boolean, title?: string) => (
    <button
      onClick={() => cmd()}
      title={title}
      className={`p-2 rounded hover:bg-slate-200 transition-colors ${active ? 'bg-blue-100 text-blue-600' : 'text-slate-600'}`}
    >
      {icon}
    </button>
  );

  // 插入表格
  const insertTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
      {/* 工具栏 */}
      <div className="bg-slate-50 border-b border-slate-200 p-3 flex items-center gap-2 flex-wrap">
        {/* 基础格式 */}
        <div className="flex gap-1">
          {toolbarBtn(() => editor.chain().focus().toggleBold().run(), <Bold className="w-4 h-4" />, editor.isActive('bold'), '粗体')}
          {toolbarBtn(() => editor.chain().focus().toggleItalic().run(), <Italic className="w-4 h-4" />, editor.isActive('italic'), '斜体')}
          {toolbarBtn(() => editor.chain().focus().toggleUnderline().run(), <UnderlineIcon className="w-4 h-4" />, editor.isActive('underline'), '下划线')}
          {toolbarBtn(() => editor.chain().focus().toggleStrike().run(), <Strikethrough className="w-4 h-4" />, editor.isActive('strike'), '删除线')}
        </div>
        
        <span className="border-l mx-1 h-6" />
        
        {/* 标题 */}
        <div className="flex gap-1">
          {toolbarBtn(() => editor.chain().focus().toggleHeading({ level: 1 }).run(), <Heading1 className="w-4 h-4" />, editor.isActive('heading', { level: 1 }), '一级标题')}
          {toolbarBtn(() => editor.chain().focus().toggleHeading({ level: 2 }).run(), <Heading2 className="w-4 h-4" />, editor.isActive('heading', { level: 2 }), '二级标题')}
          {toolbarBtn(() => editor.chain().focus().toggleHeading({ level: 3 }).run(), <Heading3 className="w-4 h-4" />, editor.isActive('heading', { level: 3 }), '三级标题')}
        </div>
        
        <span className="border-l mx-1 h-6" />
        
        {/* 列表和引用 */}
        <div className="flex gap-1">
          {toolbarBtn(() => editor.chain().focus().toggleBulletList().run(), <List className="w-4 h-4" />, editor.isActive('bulletList'), '无序列表')}
          {toolbarBtn(() => editor.chain().focus().toggleOrderedList().run(), <ListOrdered className="w-4 h-4" />, editor.isActive('orderedList'), '有序列表')}
          {toolbarBtn(() => editor.chain().focus().toggleBlockquote().run(), <Quote className="w-4 h-4" />, editor.isActive('blockquote'), '引用')}
        </div>
        
        <span className="border-l mx-1 h-6" />
        
        {/* 对齐 */}
        <div className="flex gap-1">
          {toolbarBtn(() => editor.chain().focus().setTextAlign('left').run(), <AlignLeft className="w-4 h-4" />, editor.isActive({ textAlign: 'left' }), '左对齐')}
          {toolbarBtn(() => editor.chain().focus().setTextAlign('center').run(), <AlignCenter className="w-4 h-4" />, editor.isActive({ textAlign: 'center' }), '居中')}
          {toolbarBtn(() => editor.chain().focus().setTextAlign('right').run(), <AlignRight className="w-4 h-4" />, editor.isActive({ textAlign: 'right' }), '右对齐')}
        </div>
        
        <span className="border-l mx-1 h-6" />

        {/* 文字颜色选择器 */}
        <div className="relative">
          <button
            onClick={() => { setShowColorPicker(!showColorPicker); setShowHighlightPicker(false); }}
            title="文字颜色"
            className={`p-2 rounded hover:bg-slate-200 transition-colors flex items-center gap-1 ${showColorPicker ? 'bg-blue-100 text-blue-600' : 'text-slate-600'}`}
          >
            <Type className="w-4 h-4" />
            <div className="w-3 h-3 rounded-full border border-slate-300" style={{ backgroundColor: editor.getAttributes('textStyle').color || '#000000' }} />
            <ChevronDown className="w-3 h-3" />
          </button>
          {showColorPicker && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg p-2 z-50">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-xs text-slate-500">文字颜色</span>
                <button onClick={() => setShowColorPicker(false)} className="ml-auto p-1 hover:bg-slate-100 rounded">
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {['#000000', '#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7', '#64748b', '#ec4899', '#14b8a6', '#f59e0b', '#8b5cf6', '#06b6d4', '#84cc16'].map(color => (
                  <button
                    key={color}
                    onClick={() => { editor.chain().focus().setColor(color).run(); setShowColorPicker(false); }}
                    className={`w-6 h-6 rounded border border-slate-200 hover:scale-110 transition-transform ${editor.isActive('textStyle', { color }) ? 'ring-2 ring-blue-500' : ''}`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              <button
                onClick={() => { editor.chain().focus().unsetColor().run(); setShowColorPicker(false); }}
                className="mt-2 w-full text-xs text-slate-500 hover:text-slate-700 py-1 border-t border-slate-100"
              >
                清除颜色
              </button>
            </div>
          )}
        </div>

        {/* 高亮颜色选择器 */}
        <div className="relative">
          <button
            onClick={() => { setShowHighlightPicker(!showHighlightPicker); setShowColorPicker(false); }}
            title="背景高亮"
            className={`p-2 rounded hover:bg-slate-200 transition-colors flex items-center gap-1 ${showHighlightPicker ? 'bg-blue-100 text-blue-600' : 'text-slate-600'}`}
          >
            <Highlighter className="w-4 h-4" />
            <div className="w-3 h-3 rounded-full border border-slate-300" style={{ backgroundColor: '#fef08a' }} />
            <ChevronDown className="w-3 h-3" />
          </button>
          {showHighlightPicker && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg p-2 z-50">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-xs text-slate-500">背景高亮</span>
                <button onClick={() => setShowHighlightPicker(false)} className="ml-auto p-1 hover:bg-slate-100 rounded">
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="grid grid-cols-5 gap-1">
                {['#fef08a', '#bbf7d0', '#bfdbfe', '#ddd6fe', '#fecaca', '#fde68a', '#a7f3d0', '#93c5fd', '#c4b5fd', '#fca5a5', '#fcd34d', '#6ee7b7', '#60a5fa', '#a78bfa', '#f87171'].map(color => (
                  <button
                    key={color}
                    onClick={() => { editor.chain().focus().toggleHighlight({ color }).run(); setShowHighlightPicker(false); }}
                    className={`w-6 h-6 rounded border border-slate-200 hover:scale-110 transition-transform ${editor.isActive('highlight', { color }) ? 'ring-2 ring-blue-500' : ''}`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              <button
                onClick={() => { editor.chain().focus().unsetHighlight().run(); setShowHighlightPicker(false); }}
                className="mt-2 w-full text-xs text-slate-500 hover:text-slate-700 py-1 border-t border-slate-100"
              >
                清除高亮
              </button>
            </div>
          )}
        </div>
        
        <span className="border-l mx-1 h-6" />
        
        {/* 高级格式 */}
        <div className="flex gap-1">
          {toolbarBtn(() => editor.chain().focus().toggleCode().run(), <CodeIcon className="w-4 h-4" />, editor.isActive('code'), '行内代码')}
          {toolbarBtn(() => editor.chain().focus().toggleSubscript().run(), <SubscriptIcon className="w-4 h-4" />, editor.isActive('subscript'), '下标')}
          {toolbarBtn(() => editor.chain().focus().toggleSuperscript().run(), <SuperscriptIcon className="w-4 h-4" />, editor.isActive('superscript'), '上标')}
        </div>
        
        <span className="border-l mx-1 h-6" />
        
        {/* 插入元素 */}
        <div className="flex gap-1">
          {toolbarBtn(() => {
            const url = window.prompt('输入链接地址');
            if (url) editor.chain().focus().setLink({ href: url }).run();
            return true;
          }, <LinkIcon className="w-4 h-4" />, editor.isActive('link'), '插入链接')}
          
          <button
            onClick={() => fileInputRef.current?.click()}
            title="插入图片"
            className="p-2 rounded hover:bg-slate-200 text-slate-600 transition-colors"
          >
            <ImageIcon className="w-4 h-4" />
          </button>
          
          {toolbarBtn(() => { insertTable(); return true; }, <TableIcon className="w-4 h-4" />, false, '插入表格')}
          {toolbarBtn(() => editor.chain().focus().setHorizontalRule().run(), <Minus className="w-4 h-4" />, false, '分隔线')}
        </div>
        
        <span className="border-l mx-1 h-6" />
        
        {/* Word导入 */}
        <div className="flex gap-1">
          <button
            onClick={() => wordInputRef.current?.click()}
            disabled={isProcessing}
            title="导入Word文档"
            className={`p-2 rounded hover:bg-slate-200 text-slate-600 transition-colors flex items-center gap-1 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <FileText className="w-4 h-4" />
            <span className="text-xs">{isProcessing ? '处理中...' : 'Word'}</span>
          </button>
        </div>
        
        <span className="border-l mx-1 h-6" />
        
        {/* 撤销重做 */}
        <div className="flex gap-1">
          {toolbarBtn(() => editor.chain().focus().undo().run(), <Undo className="w-4 h-4" />, false, '撤销')}
          {toolbarBtn(() => editor.chain().focus().redo().run(), <Redo className="w-4 h-4" />, false, '重做')}
        </div>
      </div>
      
      {/* 隐藏的文件输入 */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      <input
        ref={wordInputRef}
        type="file"
        accept=".docx,.doc"
        onChange={handleWordUpload}
        className="hidden"
      />
      
      {/* 编辑器内容 */}
      <EditorContent
        editor={editor}
        className="p-4 min-h-[400px] max-w-none focus:outline-none rich-text-editor-content"
      />
    </div>
  );
}
