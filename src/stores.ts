import { writable, type Writable } from "svelte/store";

export const announcements: Writable<{}> = writable({});

export const pubnixUsers: Writable<{}> = writable({});

export const blogPosts: Writable<{}> = writable({});

export const blogTags: Writable<{}> = writable({});

export const blogAuthors: Writable<{}> = writable({});