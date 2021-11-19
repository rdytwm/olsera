<template>
	<div class="row">		
		<div v-for="post in posts" class="col-12">
			<Card :id="`${post.id}`" :title="post.title" :description="post.body"/>
		</div>
	</div>

	<div v-if="loading" class="row justify-center q-my-md">
		<q-spinner-dots color="primary" size="40px" />
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
		window.removeEventListener('scroll', this.handleDebouncedScroll);
	},
	methods: {
		getPosts: async function () {
			try {
				this.loading = true;
				const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5`);
				this.posts = response.data;
				this.loading = false;
			} catch (error) {
				this.loading = false;
			}
		},
		getNextPost() {
			window.onscroll = async () => {
				this.loading = true;
				const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

				if (bottomOfWindow) {
					try {
						const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${this.nextItem++}&_limit=5`);
						this.nextItem = this.nextItem++;
						if (Object.keys(response.data).length) {
							this.posts.push(Object.assign({}, ...response.data));
							this.loading = false;
						}
					} catch (error) {
						this.loading = false;
					}
				}
			}
		}
	}
}
</script>
