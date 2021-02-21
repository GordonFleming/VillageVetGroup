import { writable } from 'svelte/store'

export const currentNumPage = writable(1);
export const searchVal = writable("");