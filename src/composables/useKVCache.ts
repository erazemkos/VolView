import { del, onBeforeUnmount, readonly, ref, set } from '@vue/composition-api';

export function useKVCache<K extends string | number | symbol, V>() {
  const cache = ref<Record<K, V>>(Object.create(null));

  const setKey = (key: K, value: V) => set(cache.value, key, value);

  const delKey = (key: K) => del(cache.value, key);

  onBeforeUnmount(() => {
    cache.value = {};
  });

  return {
    cache: readonly(cache),
    setKey,
    delKey,
  };
}
