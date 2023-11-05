<template>
	<div>
		<Nuxt />
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	// methods: {
	// 	...mapActions('landing', ['fetchLanding']),
	// },
	// async mounted() {
	// 	await this.fetchLanding(this.$i18n.locale);
	// },
};
</script>

<style>
.spec h1 {
	font-size: 3.3rem;
}

@media (min-height: 576px) {
	.spec {
		max-width: 890px;
	}
}

.page-enter-active,
.page-leave-active {
	transition: opacity 0.2s;
}
.page-enter,
.page-leave-active {
	opacity: 0;
}

/* @media (min-width: 992px) .spec {
  max-width: 960px;
}

@media (min-width: 768px) .spec {
  max-width: 720px;
}
@media (min-width: 576px) .spec {
  max-width: 540px;
} */

.op {
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	background-color: #999;
	/* -webkit-filter: blur(2px);
	-moz-filter: blur(2px);
	-o-filter: blur(2px);
	-ms-filter: blur(2px);
	filter: blur(2px); */
}
</style>
