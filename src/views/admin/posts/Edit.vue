<template>
	<div class="q-pa-md" style="max-width: 400px;margin: auto;">
		<q-form
			@submit="handlerSubmit"
			class="q-gutter-md"
		>
			<q-input
				filled
				v-model="form.title"
				label="Title"
			/>

			<q-input
				filled
				v-model="form.body"
				label="Description"
			/>

			<div>
				<q-btn label="Post" type="submit" color="primary"/>
			</div>
		</q-form>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'posts-edit',
	data() {
		return {
			form: {
				title: null,
				body: null
			},
			loading: false
		}
	},
	mounted() {
		this.getPost();
	},
	methods: {
		getPost: function () {
			const posts = this.$store.getters.getPostSingle(this.$route.params.id);

			if (posts.length) {
				this.form.title = posts[0].title;
				this.form.body = posts[0].body;
			}
		},
		async handlerSubmit() {
			try {
				if (this.form.title) {
					if (this.form.body) {

						this.$store.dispatch('updatePost',{
							id: this.$route.params.id,
							title: this.form.title,
							body: this.form.body
						});

						this.$router.push('/admin')
					} else {
						console.log("Description canot empty");
					}
				} else {
					this.loading = false;
					console.log("TItle canot Empty");
				}
			}
			catch (error) {
				this.loading = false;
			}
		}
	}
}
</script>