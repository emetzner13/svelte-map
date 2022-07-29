import { browser } from '$app/env';
import { writable } from 'svelte/store';

function checkUser() {
	const { subscribe, set, update } = writable(browser && JSON.parse(localStorage.getItem('user')));

	return {
		subscribe: subscribe,
		set: (user) => set(localStorage.setItem('user', JSON.stringify(user))),
		update: (updatedUser) => update(() => updatedUser)
	};
}

export const userStore = checkUser();
