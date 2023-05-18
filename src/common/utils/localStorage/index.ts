export const APP_KEY = 'APPKEY';

export function getStorageItem<T>(key: string): T | '' {
  if (typeof window === 'undefined') return '';

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`) ?? '';

  return JSON.parse(data);
}

export function setStorageItem(key: string, value: unknown) {
  if (typeof window !== 'undefined') {
    const data = JSON.stringify(value);

    window.localStorage.setItem(`${APP_KEY}_${key}`, data);
  }
}
