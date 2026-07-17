/**
 * JSON-LD 结构化数据注入工具
 * 用于向页面 head 中注入 Schema.org 结构化数据
 */

export function injectJSONLD(data: object, schemaId?: string) {
  const id = schemaId || 'jsonld-' + Math.random().toString(36).slice(2, 9);
  
  // 先清除同类型旧数据（避免重复）
  document.querySelectorAll('script[type="application/ld+json"]').forEach((el) => {
    if ((el as HTMLElement).dataset.schema === id) el.remove();
  });

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.dataset.schema = id;
  script.textContent = JSON.stringify(data, null, 2);
  document.head.appendChild(script);

  return id;
}

export function removeJSONLD(schemaId: string) {
  document.querySelectorAll('script[type="application/ld+json"]').forEach((el) => {
    if ((el as HTMLElement).dataset.schema === schemaId) el.remove();
  });
}
