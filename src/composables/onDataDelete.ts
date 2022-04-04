import { useDatasetStore } from '../storex/datasets';

export function onDataDelete(callback: (deletedIDs: string[]) => void) {
  const dataStore = useDatasetStore();
  let cache: string[] = [];

  // onDataDelete should be used in a component,
  // so this will clean itself up.
  dataStore.$subscribe(() => {
    const set = new Set(dataStore.allDataIDs);
    const deleted = cache.filter((id) => !set.has(id));
    cache = dataStore.allDataIDs;
    callback(deleted);
  });
}
