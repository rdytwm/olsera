import { createStore } from 'vuex'

export default createStore({
	state: {
		users: [],
		posts: [],
		loggedIn: false
	},
	getters: {
		getLoggedIn: state => {
			return state.loggedIn
		},
		getUser: state => {
			return state.users
		},
		getPost: state => {
			return state.posts
		}
	},
	mutations: {
		initialiseStore(state) {
			// Check if the ID exists
			if (localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		},
		setLoggedIn(state, payload) {
			return state.loggedIn = payload;
		},
		setUser(state, payload) {
			return state.users = payload;
		},
		setPost(state, payload) {
			return state.posts.push(payload);
		}
	},
	actions: {
		loggedIn: ({commit}, payload) => {
			commit('setLoggedIn', payload);
		},
		users: ({commit}, payload) => {
			commit('setUser', payload);
		},
		logedOut: ({commit}) => {
			commit('setUser', []);
			commit('setLoggedIn', false);
		},
		posts: ({commit}, payload) => {
			commit('setPost', payload);
		}
	},
	modules: {
	}
});