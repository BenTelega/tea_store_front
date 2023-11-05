<template>
	<b-jumbotron
		class="custom-jumbotron"
		text-variant="white"
		border-variant="dark"
		fluid
		header="Профиль"
	>
	</b-jumbotron>
</template>
<script>
export default {
	name: 'ProfilePage',
	layout: 'default',
	head() {
		return {
			title: 'Profile',
		};
	},
	mounted() {
		// this.$bvToast.show('my-toast')
		// this.$noty.show({
		//   title: 'Просто инфа',
		//   content: 'Страница профиля',
		//   variant: 'primary',
		// })
	},
};
</script>
