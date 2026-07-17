import { SITE } from '../config/site';

// 纯静态站点：Logo 直接读取本地配置，不再依赖 Supabase / system_settings
export function useSiteLogo() {
  return {
    logoUrl: SITE.logoUrl,
    darkLogoUrl: null,
    logoVersion: 1,
    loading: false,
    error: null,
    refreshLogo: () => {},
  };
}
