import { postPublicConfigGetSiteConfig } from '@/services/api/pub';
import { proxy } from 'valtio';

export const configState = proxy<{
  site: API.GetSiteConfigResponse;
}>();

export function InitialConfig() {
  InitialSite();
}

export async function InitialSite() {
  const { data } = await postPublicConfigGetSiteConfig({
    skipErrorHandler: true,
  });
  configState.site = data.data;
  document.title = data.data?.site_name;
  let meta = document.createElement('meta');
  meta.content = data.data?.site_desc;
  meta.name = 'description';
  document.getElementsByTagName('head')[0].appendChild(meta);
  let link = document.createElement('link');
  link.setAttribute('rel', 'shortcut icon');
  link.setAttribute('href', data.data?.site_logo);
  document.getElementsByTagName('head')[0].appendChild(link);
}
