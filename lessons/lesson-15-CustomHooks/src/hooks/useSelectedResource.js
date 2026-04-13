import { useState } from 'react';

const STORAGE_KEY = 'selectedResource';

export function useSelectedResource() {
  const [selectedResource, setSelectedResource] = useState(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);

    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return null;
      }
    }
    
    return null;
  });

  function updateSelectedResource(resource) {
    setSelectedResource(resource);

    if (resource === null) {
      sessionStorage.removeItem(STORAGE_KEY);
    } else {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(resource));
    }
  }

  return [selectedResource, updateSelectedResource];
}

// the use state hook has a whole function inside (line 6)
// see, it will be used to set the selected resource
// that selected resource will be used in the session to keep a result still there
// even when we refresh the browser
// when the session ends and you open a new tab, the result shouldnt be there as it's a new session!
// react is so powerful isnt it?