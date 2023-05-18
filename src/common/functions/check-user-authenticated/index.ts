import { USER_TOKEN } from '@/common/constants/environment-variables';
import { getStorageItem } from '@/common/utils';

export const checkUserAuthenticated = () => {
  const userToken = getStorageItem(USER_TOKEN);

  return !!userToken;
};
