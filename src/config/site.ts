// 全站联系方式和素材集中配置
// 脱离 Meoo / Supabase 后，所有微信二维码、电话、Logo 等都在这里统一管理，
// 后续要替换成自己的素材，只需修改本文件即可。

export const SITE = {
  name: '有机云',

  // 微信二维码（本地文件，位于 public/wechat-qr.png）
  wechatQr: '/wechat-qr.png',
  wechatQrAlt: '/wechat-qr.png',

  // 联系电话
  phones: ['133-1616-9107', '189-9836-7461'],
  email: '374183167@qq.com',
  address: '广州市番禺区大学城青蓝街28号创智大厦3栋6楼',

  // Logo / Favicon（本地素材，位于 public/，避免 CDN auth_key 过期裂图）
  logoUrl: '/logo.png',
  faviconUrl: '/favicon.png',
};
