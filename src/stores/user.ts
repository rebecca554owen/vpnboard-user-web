import { postUserUserInfo } from '@/services/api/user';
import { proxy } from 'valtio';
import { deleteCookie, getCookie } from '@/lib/cookies';

export const userState = proxy<{
  userInfo?: API.GetUserInfoResponse;
  loading?: boolean;
}>({
  loading: false,
});

export async function InitialUser() {
  if (!userState.userInfo && !userState.loading && getCookie('Authorization')) {
    userState.loading = true;
    try {
      const { data } = await postUserUserInfo({
        skipErrorHandler: true,
      });
      userState.userInfo = data.data;
      userState.loading = false;
    } catch (error) {
      deleteCookie('Authorization');
      userState.userInfo = undefined;
      userState.loading = false;
    }
  }
}
