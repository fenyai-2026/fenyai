import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowLeft, FileText, Code, Copy, CheckCircle, ChevronDown, ChevronUp,
  Server, Wifi, Building2, Bot, Send, Search, BookOpen
} from 'lucide-react';

// ==================== API 文档数据（基于真实 PDF 文档） ====================

interface APIEndpoint {
  name: string;
  method: string;
  url: string;
  desc: string;
  params?: { name: string; type: string; required: boolean; example: string; desc: string }[];
  responseExample?: string;
  notes?: string;
}

interface APICategory {
  id: string;
  name: string;
  endpoints: APIEndpoint[];
}

const scrmApiDocs: APICategory[] = [
  {
    id: 'auth',
    name: '授权认证',
    endpoints: [
      {
        name: '获取 access_token',
        method: 'POST',
        url: '/scrm/api/auth/token',
        desc: '使用 AppKey 和 AppSecret 获取访问令牌',
        params: [
          { name: 'app_key', type: 'String', required: true, example: 'your_app_key', desc: '应用 Key' },
          { name: 'app_secret', type: 'String', required: true, example: 'your_app_secret', desc: '应用密钥' },
        ],
        responseExample: `{
  "code": 2000,
  "success": true,
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIs...",
    "expires_in": 7200
  }
}`
      },
    ]
  },
  {
    id: 'customer',
    name: '客户管理',
    endpoints: [
      {
        name: '获取客户列表',
        method: 'GET',
        url: '/scrm/api/customers',
        desc: '分页获取企业微信外部联系人列表',
        params: [
          { name: 'page', type: 'Integer', required: false, example: '1', desc: '页码' },
          { name: 'limit', type: 'Integer', required: false, example: '50', desc: '每页数量' },
          { name: 'tag_id', type: 'String', required: false, example: 'tag_001', desc: '按标签筛选' },
        ],
        responseExample: `{
  "code": 2000,
  "data": {
    "total": 1280,
    "list": [{
      "external_userid": "woXXXX",
      "name": "张三",
      "avatar": "https://...",
      "tags": ["VIP", "活跃客户"],
      "add_time": "2026-01-15 10:30:00"
    }]
  }
}`
      },
      {
        name: '获取客户详情',
        method: 'GET',
        url: '/scrm/api/customers/:id',
        desc: '获取指定客户的详细信息',
        params: [
          { name: 'id', type: 'String', required: true, example: 'woXXXX', desc: '外部联系人 ID' },
        ],
      },
    ]
  },
  {
    id: 'message',
    name: '消息发送',
    endpoints: [
      {
        name: '发送单聊消息',
        method: 'POST',
        url: '/scrm/api/messages/send',
        desc: '向指定客户发送消息，支持文本、图片、链接、小程序卡片',
        params: [
          { name: 'to_user', type: 'String', required: true, example: 'woXXXX', desc: '接收者 external_userid' },
          { name: 'msg_type', type: 'String', required: true, example: 'text', desc: '消息类型: text/image/link/miniprogram' },
          { name: 'content', type: 'Object', required: true, example: '{"text":"您好"}', desc: '消息内容' },
        ],
        responseExample: `{
  "code": 2000,
  "data": {
    "message_id": "msg_abc123",
    "status": "sent"
  }
}`
      },
      {
        name: '群发消息',
        method: 'POST',
        url: '/scrm/api/messages/batch-send',
        desc: '批量群发消息给多个客户或群',
        params: [
          { name: 'to_users', type: 'Array', required: true, example: '["woXXX","woYYY"]', desc: '接收者列表' },
          { name: 'msg_type', type: 'String', required: true, example: 'text', desc: '消息类型' },
          { name: 'content', type: 'Object', required: true, example: '{"text":"活动通知"}', desc: '消息内容' },
        ],
      },
    ]
  },
];

const robotApiDocs: APICategory[] = [
  {
    id: 'robot-auth',
    name: '认证授权',
    endpoints: [
      {
        name: '登录授权',
        method: 'POST',
        url: '/robotapi/client/auth',
        desc: '用户认证授权接口，获取 accessToken',
        params: [
          { name: 'accessKey', type: 'String', required: true, example: 'user1', desc: '有机云后台账号' },
          { name: 'accessSecret', type: 'String', required: true, example: 'Q3KR21ME', desc: '有机云后台账号对应密码' },
        ],
        responseExample: `{
  "code": "0",
  "msg": "OK",
  "data": {
    "createTime": 1530537138000,
    "expireMinutes": 1451,
    "accessToken": "eaa9c935b5b27c231a8b0c323feb1361",
    "username": "user1"
  }
}`,
        notes: 'accessToken 和 token 是一致的，后续请求通过 HTTP Header 传递 token'
      },
    ]
  },
  {
    id: 'robot-manage',
    name: '机器人管理',
    endpoints: [
      {
        name: '获取机器人列表',
        method: 'POST',
        url: '/robotapi/robot/list',
        desc: '获取当前账号下所有机器人列表及状态',
        responseExample: `{
  "msg": "OK",
  "code": "0",
  "model": [{
    "lastLoginTime": "2018-03-06 20:34:31",
    "aliasName": "客服01",
    "robotKey": "03f16c3b9b6a46108c38b9f2aa49b27b",
    "robotStatus": 2,
    "nickName": "第三方身份",
    "wxid": "ewrewr",
    "clientCode": "xiaoa"
  }]
}`,
        notes: 'robotStatus: 0=初始化, 1=在线, 2=离线, 3=封号禁止登录, 4=被踢出登录'
      },
      {
        name: '获取机器人基础配置',
        method: 'POST',
        url: '/robotapi/robot/config/get',
        desc: '获取机器人的自动通过好友、验证回复等配置',
        params: [
          { name: 'r', type: 'String', required: true, example: 'cfb3e2c2...', desc: '机器人 robotKey' },
        ],
        responseExample: `{
  "msg": "OK",
  "code": "0",
  "model": {
    "isAutoAddFriendsReply": 1,
    "addFriendsReply": [
      { "msgType": 1, "id": 1, "content": "您好，欢迎添加" }
    ],
    "addFriendsCountPerDay": 500,
    "addFriendsDelaySecond": 0
  }
}`
      },
    ]
  },
  {
    id: 'robot-contacts',
    name: '联系人管理',
    endpoints: [
      {
        name: '好友列表查询',
        method: 'POST',
        url: '/robotapi/friend/list',
        desc: '分页查询机器人的好友列表',
        params: [
          { name: 'r', type: 'String', required: true, example: 'cfb3e2c2...', desc: '机器人 robotKey' },
          { name: 'n', type: 'Integer', required: true, example: '50', desc: '查询总数' },
          { name: 'offset', type: 'Integer', required: true, example: '0', desc: '偏移量' },
        ],
        responseExample: `{
  "msg": "OK",
  "code": "0",
  "offset": 0,
  "count": 10,
  "model": [{
    "displayName": "社群管家-小云",
    "nickName": "社群管家-小云",
    "wxid": "wxid_qd5wpcj6xnlf22",
    "contactType": 1,
    "isFriend": 1,
    "friendType": "Friend",
    "sex": "2",
    "signature": "广州有咨询！",
    "headImg": "http://..."
  }]
}`
      },
      {
        name: '群列表查询',
        method: 'POST',
        url: '/robotapi/group/list',
        desc: '分页查询机器人群列表',
        params: [
          { name: 'r', type: 'String', required: true, example: 'cfb3e2c2...', desc: '机器人 robotKey' },
          { name: 'n', type: 'Integer', required: true, example: '50', desc: '查询总数' },
          { name: 'offset', type: 'Integer', required: true, example: '0', desc: '偏移量' },
          { name: 'isFindAllStatus', type: 'Integer', required: false, example: '1', desc: '是否查询所有状态的群(含离群)，默认0' },
        ],
      },
      {
        name: '群成员列表查询',
        method: 'GET',
        url: '/robotapi/group/members',
        desc: '获取指定群的群成员列表',
        params: [
          { name: 'r', type: 'String', required: true, example: '5c8f76e4...', desc: '机器人 robotKey' },
          { name: 'g', type: 'String', required: true, example: '460940x403@chatroom', desc: '群的 groupWxid' },
          { name: 'status', type: 'Integer', required: true, example: '1', desc: '1=在群内, 0=离群' },
          { name: 'offset', type: 'Integer', required: true, example: '0', desc: '偏移量' },
          { name: 'n', type: 'Integer', required: true, example: '30', desc: '分页查询数量' },
        ],
      },
    ]
  },
  {
    id: 'robot-tags',
    name: '标签管理',
    endpoints: [
      {
        name: '新增标签',
        method: 'POST',
        url: '/scrm/api/tags/update',
        desc: '创建新的标签',
        params: [
          { name: 'tag_name', type: 'String', required: true, example: '宝妈群', desc: '标签内容' },
        ],
        responseExample: `{
  "code": 2000,
  "success": true,
  "data": { "id": 505, "create": true }
}`
      },
      {
        name: '给好友/群打标签',
        method: 'POST',
        url: '/robotapi/friend/tag/create',
        desc: '为好友、群或群成员添加标签',
        params: [
          { name: 'r', type: 'String', required: true, example: 'cfb3e2c2...', desc: '机器人 robotKey' },
          { name: 'contactType', type: 'Integer', required: true, example: '1', desc: '1=好友, 2=群, 3=群成员' },
          { name: 'contactWxid', type: 'String', required: true, example: 'wxid_xxx', desc: '好友/群/群成员的 wxid' },
          { name: 'tagNames', type: 'String/Array', required: true, example: 'hello2', desc: '标签内容' },
          { name: 'color', type: 'String', required: false, example: '#8396ea', desc: '颜色编码' },
        ],
      },
      {
        name: '用户标签列表查询',
        method: 'POST',
        url: '/robotapi/user/tag/list',
        desc: '查询当前用户的所有标签',
      },
      {
        name: '根据标签查好友或群',
        method: 'POST',
        url: '/robotapi/friend/tag/search',
        desc: '按标签搜索好友或群，支持交集/并集',
        params: [
          { name: 'r', type: 'String', required: true, example: 'cfb3e2c2...', desc: '机器人 robotKey' },
          { name: 'contactType', type: 'Integer', required: true, example: '1', desc: '1=好友, 2=群, 3=群成员' },
          { name: 'isMerge', type: 'Integer', required: true, example: '1', desc: '1=标签并集, 0=标签交集' },
        ],
      },
      {
        name: '删除标签',
        method: 'POST',
        url: '/robotapi/friend/tag/remove',
        desc: '移除好友/群的指定标签',
        params: [
          { name: 'r', type: 'String', required: true, example: 'cfb3e2c2...', desc: '机器人 robotKey' },
          { name: 'contactWxid', type: 'String', required: true, example: 'wxid_xxx', desc: '目标 wxid' },
          { name: 'tagName', type: 'String', required: true, example: 'hello2', desc: '要删除的标签' },
        ],
      },
    ]
  },
  {
    id: 'robot-msg',
    name: '消息能力',
    endpoints: [
      {
        name: '消息群发',
        method: 'POST',
        url: '/robotapi/msg/batch/send',
        desc: '社群消息群发接口，支持文本、图片、链接、文件(含视频)',
        params: [
          { name: 'sender', type: 'Array', required: true, example: '[{robotKey,contactWxids}]', desc: '发送好友对象数组' },
          { name: 'data', type: 'Array', required: true, example: '[{msgType,content}]', desc: '消息类型数组' },
          { name: 'token', type: 'String', required: true, example: 'user_token', desc: '用户 token' },
        ],
        responseExample: `{
  "code": "0",
  "msg": "ok"
}`,
        notes: 'msgType: 1=文本, 3=图片, 16=链接, 49=文件(含mp4)。文件大小需控制在 20M 以下。'
      },
      {
        name: '设置好友验证回复',
        method: 'POST',
        url: '/robotapi/accept/friend/reply',
        desc: '设置好友验证通过后自动发送的消息，最多3条(文字/图片/链接任意组合)',
        params: [
          { name: 'r', type: 'String', required: true, example: '086b653a...', desc: '机器人 robotKey' },
          { name: 'g', type: 'String', required: true, example: '5818992462@chatroom', desc: '群的 wxid' },
          { name: 'msgType', type: 'Integer[]', required: true, example: '1', desc: '消息类型: 1=文本, 3=图片, 16=链接' },
          { name: 'content', type: 'String[]', required: true, example: '欢迎语内容', desc: '内容(链接类型用 @#@# 拼接字段)' },
        ],
      },
      {
        name: '删除好友验证回复',
        method: 'POST',
        url: '/robotapi/accept/friend/reply/remove',
        desc: '删除指定的好友验证回复配置',
        params: [
          { name: 'r', type: 'String', required: true, example: '086b653a...', desc: '机器人 robotKey' },
          { name: 'g', type: 'String', required: true, example: '5818992462@chatroom', desc: '群的 wxid' },
          { name: 'id', type: 'Integer', required: false, example: '1', desc: '要删除的回复 ID' },
        ],
      },
    ]
  },
];

const wsApiDocs: APICategory[] = [
  {
    id: 'ws-connect',
    name: 'WebSocket 连接',
    endpoints: [
      {
        name: '建立 WebSocket 连接',
        method: 'WS',
        url: 'wss://www.yjiyun.com/chat?name={accessKey}&token={token}',
        desc: '建立 WebSocket 长连接，用于实时消息推送和指令发送',
        notes: '测试环境: ws://test.yjiyun.com/chat?name={accessKey}&token={token}\n客户端需具备断开重连机制（建议间隔 10 秒）'
      },
      {
        name: '心跳包',
        method: 'WS',
        url: '-',
        desc: '保持连接活跃，间隔 30 秒发送一次',
        responseExample: `// 请求
{
  "messageId": "2017120811175201231",
  "type": "chat.heart",
  "counter": 1
}

// 响应
{
  "messageId": "2017120811175201231",
  "type": "chat.heart",
  "counter": 1
}`,
        notes: 'counter 从 1 开始计数，到达 MAX_VALUE 后重置为 1'
      },
      {
        name: '消息订阅',
        method: 'WS',
        url: '-',
        desc: '自定义订阅通道的消息类型，默认订阅 chat.heart 和 robot.route.count',
        responseExample: `// 请求
{
  "subscribeType": [
    "robot.msg.send.confirm",
    "chat.message",
    "message.image"
  ],
  "type": "robot.subscribe.type",
  "messageId": "201909201231232"
}

// 响应
{
  "subscribeType": [
    "chat.heart",
    "robot.route.count",
    "robot.msg.send.confirm",
    "chat.message",
    "message.image"
  ],
  "code": "0",
  "type": "robot.subscribe.type"
}`
      },
    ]
  },
  {
    id: 'ws-events',
    name: '事件推送',
    endpoints: [
      {
        name: '联系人变更推送',
        method: 'PUSH',
        url: 'type: contact.modify',
        desc: '当好友信息变更、新增、删除时主动推送',
        responseExample: `{
  "type": "contact.modify",
  "wxid": "wxid_7c0o76lzcioa22",
  "opcode": 2,
  "nickName": "丹丹",
  "aliasName": "lidan881028",
  "signature": "你的坚持～将会美好",
  "headImg": "http://...",
  "robotKey": "7f0af00ff6dd4350ac2b08b3ac7b80f7",
  "contactType": 1,
  "friendType": "Friend",
  "sex": 2,
  "displayProvince": "湖南",
  "displayCity": "岳阳"
}`,
        notes: 'opcode: 2=新增或修改, 5=删除'
      },
      {
        name: '文本消息推送',
        method: 'PUSH',
        url: 'type: chat.message',
        desc: '收到文本消息时实时推送',
        responseExample: `{
  "type": "chat.message",
  "isChatRoomMessage": 0,
  "sender": "纳悦",
  "senderWxid": "wxid_tigac0qb7qoh21",
  "receiver": "小时空｜娜娜",
  "receiverWxid": "wxid_9zql63pyo74b22",
  "content": "喜悦",
  "msgType": 1,
  "friendType": "Friend",
  "robotKey": "066e1c567dc84d558b4368928a846cc3",
  "createTime": "2018-11-15 00:00:53"
}`,
        notes: 'isChatRoomMessage: 0=好友消息, 1=群消息'
      },
    ]
  },
  {
    id: 'ws-send',
    name: '消息发送 (WS)',
    endpoints: [
      {
        name: '文本消息发送',
        method: 'WS',
        url: 'type: robot.text.send',
        desc: '通过 WebSocket 发送文本消息，支持多联系人',
        responseExample: `// 请求
{
  "robotKey": "066e1c567dc84d558b4368928a846cc3",
  "messageId": "2018111500010900000803",
  "type": "robot.text.send",
  "token": "eaa9c935b5b27c231a8b0c323feb1361",
  "friends": ["wxid_tigac0qb7qoh21"],
  "atUserList": "",
  "content": "您好，本次课程在群内开展"
}

// 响应
{
  "type": "robot.msg.send.confirm",
  "messageId": "2018111500010900000803",
  "isOver": "1",
  "code": "0",
  "msgType": 1
}`,
        notes: '发送对象是群时，atUserList 为群成员 wxid，文字前需拼接 "@昵称 "'
      },
      {
        name: '图片消息发送',
        method: 'WS',
        url: 'type: robot.image.send',
        desc: '通过 WebSocket 发送图片消息',
        responseExample: `// 请求
{
  "robotKey": "066e1c567dc84d558b4368928a846cc3",
  "messageId": "2018111500010900000803",
  "pic": "http://xxxxxx/xx.png",
  "type": "robot.image.send",
  "token": "eaa9c935b5b27c231a8b0c323feb1361",
  "friends": ["wxid_tigac0qb7qoh21"]
}`
      },
      {
        name: '退出群聊',
        method: 'WS',
        url: 'type: robot.quit.group',
        desc: '让机器人退出指定群聊',
        responseExample: `// 请求
{
  "messageId": "20171226165723210067673250706",
  "type": "robot.quit.group",
  "robotKey": "f5d1019694af4f859411ccc7674eb077",
  "groupWxid": "11936992139@chatroom",
  "token": "035e9986f7430478ddb4b7b46d7a443b"
}`
      },
    ]
  },
];

// ==================== 子组件 ====================

function EndpointCard({ endpoint }: { endpoint: APIEndpoint }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const methodColor: Record<string, string> = {
    GET: 'bg-green-100 text-green-700',
    POST: 'bg-blue-100 text-blue-700',
    WS: 'bg-purple-100 text-purple-700',
    PUSH: 'bg-amber-100 text-amber-700',
  };

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition-colors text-left"
      >
        <div className="flex items-center space-x-3 flex-wrap gap-y-1">
          <span className={`px-2.5 py-1 rounded text-xs font-bold font-mono ${methodColor[endpoint.method] || 'bg-slate-100 text-slate-600'}`}>
            {endpoint.method}
          </span>
          <span className="font-semibold text-slate-900">{endpoint.name}</span>
          <code className="text-xs text-slate-500 font-mono hidden sm:inline">{endpoint.url}</code>
        </div>
        {expanded ? <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-100"
          >
            <div className="p-5 space-y-4">
              <p className="text-sm text-slate-600">{endpoint.desc}</p>

              {/* URL */}
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Endpoint</span>
                <div className="mt-1 flex items-center space-x-2">
                  <code className="text-sm bg-slate-100 px-3 py-1.5 rounded-lg font-mono text-slate-700 flex-1 break-all">
                    {endpoint.url}
                  </code>
                  <button onClick={() => handleCopy(endpoint.url)} className="p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Params */}
              {endpoint.params && endpoint.params.length > 0 && (
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">请求参数</span>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="px-3 py-2 text-left font-medium text-slate-600">参数名</th>
                          <th className="px-3 py-2 text-left font-medium text-slate-600">类型</th>
                          <th className="px-3 py-2 text-center font-medium text-slate-600">必填</th>
                          <th className="px-3 py-2 text-left font-medium text-slate-600">说明</th>
                        </tr>
                      </thead>
                      <tbody>
                        {endpoint.params.map((param, i) => (
                          <tr key={i} className="border-t border-slate-100">
                            <td className="px-3 py-2 font-mono text-xs text-sky-600">{param.name}</td>
                            <td className="px-3 py-2 text-xs text-slate-500">{param.type}</td>
                            <td className="px-3 py-2 text-center">
                              {param.required ? (
                                <span className="text-xs text-red-500 font-medium">是</span>
                              ) : (
                                <span className="text-xs text-slate-400">否</span>
                              )}
                            </td>
                            <td className="px-3 py-2 text-xs text-slate-600">{param.desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Response Example */}
              {endpoint.responseExample && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">响应示例</span>
                    <button
                      onClick={() => handleCopy(endpoint.responseExample!)}
                      className="flex items-center space-x-1 text-xs text-slate-400 hover:text-sky-600 transition-colors"
                    >
                      {copied ? <CheckCircle className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? '已复制' : '复制'}</span>
                    </button>
                  </div>
                  <pre className="bg-slate-900 text-slate-300 p-4 rounded-lg text-xs font-mono overflow-x-auto leading-relaxed">
                    {endpoint.responseExample}
                  </pre>
                </div>
              )}

              {/* Notes */}
              {endpoint.notes && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-xs text-amber-800 leading-relaxed whitespace-pre-line">{endpoint.notes}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ==================== 主组件 ====================

export default function OpenPlatformDocs() {
  const [activeTab, setActiveTab] = useState<'scrm' | 'robot-http' | 'robot-ws'>('robot-http');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'scrm' as const, label: '企微 SCRM API', icon: Building2, color: 'text-blue-600' },
    { id: 'robot-http' as const, label: '微信机器人 HTTP', icon: Bot, color: 'text-green-600' },
    { id: 'robot-ws' as const, label: '微信机器人 WebSocket', icon: Wifi, color: 'text-purple-600' },
  ];

  const getDocs = () => {
    switch (activeTab) {
      case 'scrm': return scrmApiDocs;
      case 'robot-http': return robotApiDocs;
      case 'robot-ws': return wsApiDocs;
    }
  };

  const docs = getDocs();

  const filteredDocs = searchQuery
    ? docs.map(cat => ({
        ...cat,
        endpoints: cat.endpoints.filter(ep =>
          ep.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ep.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ep.url.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(cat => cat.endpoints.length > 0)
    : docs;

  return (
    <>
      <Helmet>
        <title>有机云开放平台API文档_企微SCRM_微信机器人</title>
        <meta name="description" content="有机云开放平台API参考文档，包含企微SCRM API、微信机器人HTTP接口、WebSocket实时通信接口的完整参数说明和响应示例。" />
        <meta name="keywords" content="API文档,企微API文档,微信机器人API,WebSocket文档,SCRM接口,私域API参考" />
        <link rel="canonical" href="https://www.fenyai.com/open-platform/docs" />
      </Helmet>

      <main className="bg-slate-50 min-h-screen pt-16">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-4">
                <Link
                  to="/open-platform"
                  className="flex items-center text-sm text-slate-500 hover:text-sky-600 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  返回开放平台
                </Link>
                <span className="text-slate-300">|</span>
                <h1 className="text-lg font-bold text-slate-900 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-sky-500" />
                  API 参考文档
                </h1>
              </div>

              {/* Search */}
              <div className="hidden md:flex items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="搜索接口..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 w-64"
                  />
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 overflow-x-auto pb-0 -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setSearchQuery(''); }}
                  className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-sky-500 text-sky-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? tab.color : ''}`} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* General Info Banner */}
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 mb-8">
            <h3 className="font-semibold text-sky-900 mb-2 flex items-center">
              <Server className="w-4 h-4 mr-2" />
              通用说明
            </h3>
            <div className="text-sm text-sky-800/80 space-y-1">
              {activeTab === 'scrm' && (
                <>
                  <p>Base URL: <code className="bg-sky-100 px-1.5 py-0.5 rounded font-mono text-xs">https://api.fenyai.com</code></p>
                  <p>认证方式: Bearer Token (通过 Authorization Header 传递)</p>
                  <p>数据格式: JSON (Content-Type: application/json)</p>
                </>
              )}
              {activeTab === 'robot-http' && (
                <>
                  <p>生产环境: <code className="bg-sky-100 px-1.5 py-0.5 rounded font-mono text-xs">https://www.yjiyun.com</code></p>
                  <p>测试环境: <code className="bg-sky-100 px-1.5 py-0.5 rounded font-mono text-xs">http://test.yjiyun.com</code></p>
                  <p>认证方式: HTTP Header 传递 token (先调用 /robotapi/client/auth 获取)</p>
                  <p>编码: UTF-8 | 默认 Content-Type: application/x-www-form-urlencoded</p>
                </>
              )}
              {activeTab === 'robot-ws' && (
                <>
                  <p>生产环境: <code className="bg-sky-100 px-1.5 py-0.5 rounded font-mono text-xs">wss://www.yjiyun.com/chat?name={'{accessKey}'}&token={'{token}'}</code></p>
                  <p>测试环境: <code className="bg-sky-100 px-1.5 py-0.5 rounded font-mono text-xs">ws://test.yjiyun.com/chat?name={'{accessKey}'}&token={'{token}'}</code></p>
                  <p>心跳间隔: 30 秒 | 断线重连: 建议 10 秒</p>
                  <p>所有请求必须携带: type, robotKey, messageId, token, code 字段</p>
                </>
              )}
            </div>
          </div>

          {/* API Categories */}
          <div className="space-y-8">
            {filteredDocs.map((category) => (
              <div key={category.id}>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <span className="w-1 h-6 bg-sky-500 rounded-full mr-3"></span>
                  {category.name}
                </h2>
                <div className="space-y-3">
                  {category.endpoints.map((endpoint, i) => (
                    <EndpointCard key={i} endpoint={endpoint} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredDocs.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">未找到匹配的接口</p>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">需要更多帮助？</h3>
            <p className="text-sky-100 mb-6">我们的技术团队随时为您提供接入支持</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-colors"
              >
                联系技术支持
              </Link>
              <Link
                to="/open-platform"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                返回开放平台
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
