import { useState, useCallback } from 'react';
import { supabase } from '../supabase/client';
import { decode } from 'base64-arraybuffer';

interface UseImageUploadOptions {
  bucket: 'article-covers' | 'article-media';
  folder?: string;
}

interface UploadResult {
  url: string;
  path: string;
}

export function useImageUpload(options: UseImageUploadOptions) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const upload = useCallback(async (file: File): Promise<UploadResult | null> => {
    setUploading(true);
    setProgress(0);

    try {
      const ext = file.name.split('.').pop() || 'png';
      const path = `${options.folder || 'uploads'}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

      const reader = new FileReader();
      const base64 = await new Promise<string>((resolve) => {
        reader.onload = (e) => resolve((e.target?.result as string).split(',')[1]);
        reader.readAsDataURL(file);
      });

      const { data, error } = await supabase.storage
        .from(options.bucket)
        .upload(path, decode(base64), {
          contentType: file.type,
          upsert: false,
        });

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from(options.bucket)
        .getPublicUrl(data.path);

      setProgress(100);
      return { url: publicUrl, path: data.path };
    } catch (err) {
      console.error('Upload error:', err);
      return null;
    } finally {
      setUploading(false);
    }
  }, [options.bucket, options.folder]);

  const uploadFromClipboard = useCallback(async (blob: Blob): Promise<UploadResult | null> => {
    const file = new File([blob], `paste-${Date.now()}.png`, { type: 'image/png' });
    return upload(file);
  }, [upload]);

  return { upload, uploadFromClipboard, uploading, progress };
}
