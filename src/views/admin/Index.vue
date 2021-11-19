<template>
	<div class="row">
		<div v-if="posts.length" v-for="post in posts" class="col-12">
			<Card :id="post.id" :title="post.title" :description="post.body" :admin="true"/>
		</div>

		<div v-if="!posts.length">Belum memiliki postingan</div>
	</div>

	<button class="btn-floating" type="button" @click="$router.push('/admin/post/create')">
		<i class="bi-plus-lg"></i>
	</button>
</template>

<script>
import Card from '../../components/Card.vue';

export default {
	name: 'admin-index',
	components: {
		Card
	},
	computed: {
		posts: function () {
			return this.$store.getters.getPost;
		}
	}
}
</script>