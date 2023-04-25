import storage from "localforage";
import { useEffect, useState } from "react"

export function useStorage<T>(key: string, fallback: T): [T | undefined, (newValue: T) => void] {
  const [value, setValue] = useState<T>();

  useEffect(() => {
    storage.getItem<T>(key).then((storedValue) => setValue(storedValue || fallback));
  }, [key, fallback]);

  useEffect(() => {
    storage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
