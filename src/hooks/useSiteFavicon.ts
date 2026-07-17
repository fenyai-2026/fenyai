import { useEffect } from 'react';
import { SITE } from '../config/site';

// 纯静态站点：Favicon 直接读取本地配置，不再依赖 Supabase / system_settings
export function useSiteFavicon() {
  useEffect(() => {
    const faviconLinks = document.querySelectorAll('link[rel*="icon"], link[rel="shortcut icon"]');
    faviconLinks.forEach((link) => {
      (link as HTMLLinkElement).href = SITE.faviconUrl;
    });
  }, []);

  return { faviconUrl: SITE.faviconUrl, loading: false, error: null, refreshFavicon: () => {} };
}
