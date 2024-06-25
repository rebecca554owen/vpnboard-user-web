// @ts-ignore
/* eslint-disable */
import request from '@/lib/request';

/** Create an announcement Create an announcement POST /admin/announcement/create */
export async function postAdminAnnouncementCreate(
  body: API.CreateAnnouncementRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/announcement/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Delete an announcement Delete an announcement POST /admin/announcement/delete */
export async function postAdminAnnouncementOpenApiDelete(
  body: API.DeleteAnnouncementRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/announcement/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** List announcements List announcements POST /admin/announcement/list */
export async function postAdminAnnouncementList(
  body: API.ListAnnouncementRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.ListAnnouncementResponse }>(
    '/admin/announcement/list',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** Update an announcement Update an announcement POST /admin/announcement/update */
export async function postAdminAnnouncementUpdate(
  body: API.UpdateAnnouncementRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/announcement/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get AliPayF2F config Get AliPayF2F config POST /admin/config/get_alipay_f2f_config */
export async function postAdminConfigGetAlipayF2FConfig(options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.GetAliPayF2FConfigResponse }>(
    '/admin/config/get_alipay_f2f_config',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** Get Email config Get Email config POST /admin/config/get_email_config */
export async function postAdminConfigGetEmailConfig(options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.GetEmailConfigResponse }>(
    '/admin/config/get_email_config',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** Get EPay config Get EPay config POST /admin/config/get_epay_config */
export async function postAdminConfigGetEpayConfig(options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.GetEPayConfigResponse }>(
    '/admin/config/get_epay_config',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** Get Invite config Get Invite config POST /admin/config/get_invite_config */
export async function postAdminConfigGetInviteConfig(options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.GetInviteConfigResponse }>(
    '/admin/config/get_invite_config',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** Get Node config Get Node config POST /admin/config/get_node_config */
export async function postAdminConfigGetNodeConfig(options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.GetNodeConfigResponse }>(
    '/admin/config/get_node_config',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** Get Register config Get Register config POST /admin/config/get_register_config */
export async function postAdminConfigGetRegisterConfig(options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.GetRegisterConfigResponse }>(
    '/admin/config/get_register_config',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** Get site config Get site config POST /admin/config/get_site_config */
export async function postAdminConfigGetSiteConfig(options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.GetSiteConfigResponse }>(
    '/admin/config/get_site_config',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** Get Subscribe config Get Subscribe config POST /admin/config/get_subscribe_config */
export async function postAdminConfigGetSubscribeConfig(options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.GetSubscribeConfigResponse }>(
    '/admin/config/get_subscribe_config',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** Get Telegram config Get Telegram config POST /admin/config/get_telegram_config */
export async function postAdminConfigGetTelegramConfig(options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.GetTelegramConfigResponse }>(
    '/admin/config/get_telegram_config',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** Get TOC config Get TOC config POST /admin/config/get_toc_config */
export async function postAdminConfigGetTocConfig(options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.GetTOCConfigResponse }>(
    '/admin/config/get_toc_config',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** Get VerifyCode config Get VerifyCode config POST /admin/config/get_verify_code_config */
export async function postAdminConfigGetVerifyCodeConfig(options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.GetVerifyCodeConfigResponse }>(
    '/admin/config/get_verify_code_config',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** List Subscribe scheme types List Subscribe scheme types POST /admin/config/list_subscribe_scheme_type */
export async function postAdminConfigListSubscribeSchemeType(options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.ListSubscribeSchemeTypeResponse }>(
    '/admin/config/list_subscribe_scheme_type',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** Update AliPayF2F config Update AliPayF2F config POST /admin/config/update_alipay_f2f_config */
export async function postAdminConfigUpdateAlipayF2FConfig(
  body: API.UpdateAliPayF2FConfigRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/config/update_alipay_f2f_config', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Update Email config Update Email config POST /admin/config/update_email_config */
export async function postAdminConfigUpdateEmailConfig(
  body: API.UpdateEmailConfigRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/config/update_email_config', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Update EPay config Update EPay config POST /admin/config/update_epay_config */
export async function postAdminConfigUpdateEpayConfig(
  body: API.UpdateEPayConfigRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/config/update_epay_config', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Update Invite config Update Invite config POST /admin/config/update_invite_config */
export async function postAdminConfigUpdateInviteConfig(
  body: API.UpdateInviteConfigRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/config/update_invite_config', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Update Node config Update Node config POST /admin/config/update_node_config */
export async function postAdminConfigUpdateNodeConfig(
  body: API.UpdateNodeConfigRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/config/update_node_config', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Update Register config Update Register config POST /admin/config/update_register_config */
export async function postAdminConfigUpdateRegisterConfig(
  body: API.UpdateRegisterConfigRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/config/update_register_config', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Update site config Update site config POST /admin/config/update_site_config */
export async function postAdminConfigUpdateSiteConfig(
  body: API.UpdateSiteConfigRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/config/update_site_config', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Update Subscribe config Update Subscribe config POST /admin/config/update_subscribe_config */
export async function postAdminConfigUpdateSubscribeConfig(
  body: API.UpdateSubscribeConfigRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/config/update_subscribe_config', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Update Telegram config Update Telegram config POST /admin/config/update_telegram_config */
export async function postAdminConfigUpdateTelegramConfig(
  body: API.UpdateTelegramConfigRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/config/update_telegram_config', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Update TOC config Update TOC config POST /admin/config/update_toc_config */
export async function postAdminConfigUpdateTocConfig(
  body: API.UpdateTOCConfigRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/config/update_toc_config', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Update VerifyCode config Update VerifyCode config POST /admin/config/update_verify_code_config */
export async function postAdminConfigUpdateVerifyCodeConfig(
  body: API.UpdateVerifyCodeConfigRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/config/update_verify_code_config', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Create a Knowledge Create a Knowledge POST /admin/knowledge/create */
export async function postAdminKnowledgeCreate(
  body: API.CreateKnowledgeRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/knowledge/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Delete a Knowledge Delete a Knowledge POST /admin/knowledge/delete */
export async function postAdminKnowledgeOpenApiDelete(
  body: API.DeleteKnowledgeRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/knowledge/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** List Knowledge List Knowledge POST /admin/knowledge/list */
export async function postAdminKnowledgeList(
  body: API.ListKnowledgeRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.ListKnowledgeResponse }>('/admin/knowledge/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Update a Knowledge Update a Knowledge POST /admin/knowledge/update */
export async function postAdminKnowledgeUpdate(
  body: API.UpdateKnowledgeRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/knowledge/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Create a new node group Create a new node group POST /admin/node_group/create */
export async function postAdminNodeGroupCreate(
  body: API.CreateNodeGroupRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/node_group/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Delete a node group Delete a node group POST /admin/node_group/delete */
export async function postAdminNodeGroupOpenApiDelete(
  body: API.DeleteNodeGroupRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/node_group/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get the list of node groups Get the list of node groups POST /admin/node_group/list */
export async function postAdminNodeGroupList(
  body: API.ListNodeGroupRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.ListNodeGroupResponse }>('/admin/node_group/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Update a node group Update a node group POST /admin/node_group/update */
export async function postAdminNodeGroupUpdate(
  body: API.UpdateNodeGroupRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/node_group/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Create node Create node POST /admin/node/create */
export async function postAdminNodeCreate(
  body: API.CreateNodeRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/node/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Delete node Delete node POST /admin/node/delete */
export async function postAdminNodeOpenApiDelete(
  body: API.DeleteNodeRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/node/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get node list Get node list POST /admin/node/list */
export async function postAdminNodeList(
  body: API.ListNodeRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.ListNodeResponse }>('/admin/node/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Update node Update node POST /admin/node/update */
export async function postAdminNodeUpdate(
  body: API.UpdateNodeRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/node/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Create a new product Create a new product POST /admin/product/create */
export async function postAdminProductCreate(
  body: API.CreateProductRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/product/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Delete a product Delete a product POST /admin/product/delete */
export async function postAdminProductOpenApiDelete(
  body: API.DeleteProductRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/product/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** List product List product POST /admin/product/list */
export async function postAdminProductList(options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.ListProductResponse }>('/admin/product/list', {
    method: 'POST',
    ...(options || {}),
  });
}

/** Update a product Update a product POST /admin/product/update */
export async function postAdminProductUpdate(
  body: API.UpdateProductRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/admin/product/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Create a user Create a user POST /admin/user/create */
export async function postAdminUserCreate(
  body: API.CreateUserRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.CreateUserResponse }>('/admin/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get user info Get user info POST /admin/user/info */
export async function postAdminUserInfo(options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.GetUserInfoResponse }>('/admin/user/info', {
    method: 'POST',
    ...(options || {}),
  });
}

/** List users List users POST /admin/user/list */
export async function postAdminUserList(
  body: API.ListUserRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.ListUserResponse }>('/admin/user/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
