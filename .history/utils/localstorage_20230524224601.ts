// utils/localStorage.ts
export function getLocalStorageItem(key: string): string | null {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(key);
    }
    return null;
  }
  
  export function setLocalStorageItem(key: string, value: string): void {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, value);
    }
  }
  
  export function removeLocalStorageItem(key: string): void {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(key);
    }
  }
  