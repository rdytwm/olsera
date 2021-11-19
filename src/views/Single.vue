<template>
	<div class="row">
		<div class="col-12">
			<Card v-if="posts" :id="posts.id" :title="posts.title" :description="posts.body"/>

			<div class="comment">
				<h5 class="comment-label">Comment</h5>

				<input class="input input-rounded" type="text" @keyup.enter="handlerInput($event)" placeholder="komentar .. .">

				<ul class="comment-list">
					<li v-for="(comment, index) in comments" :key="index">{{comment.body}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
// Library
import axios from 'axios';

// Component
import Card from '../components/Card';

export default {
	components: {
		Card
	},
	data() {
		return {
			posts: null,
			pages_not_found: false
		}
	},
	beforeMount() {
		this.getPost();
	},
	methods: {
		getPost: async function() {
			try {
				const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`);
				this.posts = response.data;
			} catch (error) {
				console.log("Error", error)
				this.pages_not_found = true;
			}
		},
		handlerInput($event) {
			const value = $event.target.value;

			if (this.$store.getters.getLoggedIn) {
				if (value.length > 2) {
					this.$store.dispatch('comment', {id_posts: this.posts.id, body: value});
				}
			} else {
				return this.$router.push('/login');
			}
		}
	},
	computed: {
		comments: function () {
			if (this.posts) {
				return this.$store.getters.getComment(this.posts.id);
			}
		}
	}
}
</script>