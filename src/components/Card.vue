<template>
	<div class="card">
		<div class="card-title">{{ title }}</div>
		<div class="card-body">{{ description }}</div>
		<div class="card-footer">
			<div>
				<button :class="(likes ? 'active' : '') + ' btn btn-action btn-like'" @click="handlerReaction(true)">
					<i class="bi-hand-thumbs-up"></i>
				</button>
			</div>
			<div>
				<button :class="(dislike ? 'active' : '') + ' btn btn-action btn-like'" @click="handlerReaction(false)">
					<i class="bi-hand-thumbs-down"></i>
				</button>
			</div>
			<div>
				<button class="btn btn-action btn-comment">
					<i class="bi-chat-left-dots-fill"></i>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Card',
	props: {
		key: Number,
		title: String,
		description: String
	},
	data() {
		return {
			likes: false,
			dislike: false
		}
	},
	methods: {
		handlerReaction: function(type) {
			if (type)
				return this.likes = !this.likes;
	
			return this.dislike = !this.dislike;
		},
		highlightReaction: function(key) {
			// this.$store.getters.
		}
	}
}
</script>