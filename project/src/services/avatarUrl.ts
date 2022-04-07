const AUTH_AVATAR_URL_NAME = 'wtw-avatar';

export type Avatar = string;

export const getAvatarUrl = (): Avatar => {
  const avatarUrl = localStorage.getItem(AUTH_AVATAR_URL_NAME);
  return avatarUrl ?? 'https://www.flaticon.com/ru/free-icons/ux';
};

export const saveAvatarUrl = (url: Avatar): void => {
  localStorage.setItem(AUTH_AVATAR_URL_NAME, url);
};

export const dropAvatarUrl = (): void => {
  localStorage.removeItem(AUTH_AVATAR_URL_NAME);
};
