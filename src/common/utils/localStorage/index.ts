import { APP_KEY } from '@/common/constants/environment-variables';

export function getStorageItem<T>(key: string): T | null {
  if (typeof window === 'undefined') return null;

  const storageItem = window.localStorage.getItem(`${APP_KEY}:${key}`);

  return storageItem ? JSON.parse(storageItem) : null;
}

export function setStorageItem(key: string, value: unknown) {
  if (typeof window !== 'undefined') {
    const storageNewItem = JSON.stringify(value);

    window.localStorage.setItem(`${APP_KEY}:${key}`, storageNewItem);
  }
}
