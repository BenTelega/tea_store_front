<template>
	<b-container class="pt-3">
		<div v-html="contact"></div>
	</b-container>
</template>

<script>
export default {
	name: 'ContactPage',
	layout: 'default',

	head() {
		return {
			title: 'ContactPage',
		};
	},
	async mounted() {
		await this.$store.dispatch('fetchContact', `${this.$i18n.locale}`);
	},
	computed: {
		contact() {
			return this.$store.getters['getContact']['body'];
		},
	},
};
</script>
