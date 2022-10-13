const cache = new Map();

export const get = (key) => cache.get(key);

export const set = (key, value) => cache.set(key, value);
