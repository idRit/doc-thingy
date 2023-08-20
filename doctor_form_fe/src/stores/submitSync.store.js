import { writable } from 'svelte/store';

export const submit = writable(false);
export const handleSubmit = writable({});