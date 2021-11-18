<template>
	<h2 class="display-1">Latest Post</h2>

	<div id="infinite-list" class="container">
		<div v-for="post in posts" class="col-posts">
			<Card :title="post.title" :description="post.body"/>
		</div>
	</div>
</template>

<script>
// Package
import axios from 'axios';

// Component
import Card from '../components/Card';

export default {
	name: 'Home',
	components: {
		Card
	},
	data() {
		return {
			posts: [],
			nextItem: 1,
			loading: false
		}
	},
	beforeMount() {
		this.getPosts();
	},
	mounted() {
		this.getNextPost();
	},
	beforeDestroy() {
		// I switched the example from `destroyed` to `beforeDestroy`
		// to exercise your mind a bit. This lifecycle method works too.
		window.removeEventListener('scroll', this.handleDebouncedScroll);
	},
	methods: {
		getPosts: async function () {
			try {
				const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5`);
				console.log(response);
				this.posts = response.data;
			} catch (error) {
				console.log("get posts error", error);
			}
		},
		getNextPost() {
			window.onscroll = async () => {
				let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

				if (bottomOfWindow) {
					try {
						const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${this.nextItem++}&_limit=5`);
						if (Object.keys(response.data).length) {
							this.posts.push(Object.assign(...this.posts, ...response.data));
						}
					} catch (error) {
						console.log("get posts error", error);
					}
				}
			}
		}
	}
}
</script>
