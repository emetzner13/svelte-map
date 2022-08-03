import { browser } from '$app/env';
import { writable } from 'svelte/store';

function checkUser() {
	const { subscribe, set, update } = writable(browser && JSON.parse(localStorage.getItem('user')));

	return {
		subscribe: subscribe,
		set: (user) => set(user && localStorage.setItem('user', JSON.stringify(user))),
		delete: () => set(localStorage.removeItem('user'))
	};
}

export const userStore = checkUser();
