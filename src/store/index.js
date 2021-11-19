import { createStore } from 'vuex'

const removeEmptyOrNull = (obj) => {
	return obj.filter(x => x !== null)
};


export default createStore({
	state: {
		users: [],
		posts: [],
		favorites: [],
		comments: [],
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
		},
		getPostSingle: (state) => {
			return id => state.posts.filter(post =>{
				return post.id === id
			});
		},
		getFavorite: state => {
			return state.favorites;
		},
		getComment: (state) => {
			// return state.comments;
			return id => state.comments.filter(comment =>{
				return comment.id_posts === id
			});
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
		},
		updatePost(state, payload) {
			return state.posts = payload;
		},
		setFavorite(state, payload) {
			return state.favorites.push(payload);
		},
		delFavorite(state, payload) {
			return state.favorites = payload;
		},
		setComment(state, payload) {
			return state.comments.push(payload);
		},
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
		},
		deletePost: ({commit, getters}, payload) => {
			let object = getters.getPost;

			Object.keys(object).forEach(function(key){
				if (object[key]?.id === payload) {
					delete object[key];
				}
			});

			commit('updatePost', removeEmptyOrNull(object));
		},
		updatePost: ({commit, getters}, payload) => {
			const object = getters.getPost;

			for (var i = 0; i < object.length; i++) {
				if (object[i].id === payload.id) {
					object[i].title = payload.title;
					object[i].body = payload.body;
				}
			}

			commit('updatePost', removeEmptyOrNull(object));
		},
		comment({commit, getters}, payload) {
			const comment = {
				id: getters.getComment.length + 1,
				id_posts: payload.id_posts,
				body: payload.body
			}

			commit('setComment', comment);
		},
		favorite: ({commit, getters}, payload) => {
			commit('setFavorite', payload);
		},
		unFavorite: ({commit, getters}, payload) => {
			let object = getters.getFavorite;

			Object.keys(object).forEach(function(key){
				if (object[key]?.id === payload) {
					delete object[key];
				}
			});

			commit('delFavorite', removeEmptyOrNull(object));
		}
	},
	modules: {
	}
});