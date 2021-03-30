import { writable, readable } from 'svelte/store'

export const currentNumPage = writable(1);
export const searchVal = writable("");
export const scrollProduct = writable("");

export const cart = writable([]);
export const totalAmount = writable(0);
export const itemCount = writable(0);

export const deliveryDetails = writable();