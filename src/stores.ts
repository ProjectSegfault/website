import { writable, type Writable } from "svelte/store";

export const announcements: Writable<{}> = writable({});
