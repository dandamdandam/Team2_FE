interface StorageKey {
  accessToken?: string;
  refreshToken?: string;
}

const initStorage = <T extends keyof StorageKey>(key: T, storage: Storage) => {
  const storageKey = String(key);
  const get = (): StorageKey[T] => {
    const value = storage.getItem(storageKey);
    return JSON.parse(value as string);
  };
  const set = (value?: StorageKey[T]) => {
    if (value == undefined || value == null) {
      return storage.removeItem(storageKey);
    }
    storage.setItem(storageKey, JSON.stringify(value));
  };
  return { get, set };
};

export const accessTokenStorage = initStorage("accessToken", localStorage);
export const refreshTokenStorage = initStorage("refreshToken", localStorage);
