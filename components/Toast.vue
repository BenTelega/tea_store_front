<template>
	<b-toast
		id="my-toast"
		:variant="variant"
		:autoHideDelay="autoHideDelay"
		:appendToast="append"
		:toaster="toaster"
		@shown="ben"
		solid
	>
		<template #toast-title>
			<div class="d-flex flex-grow-1 align-items-baseline">
				<!-- <b-img
          blank
          blank-color="#ff5555"
          class="mr-2"
          width="12"
          height="12"
        ></b-img> -->
				<strong class="mr-auto">{{ title }}</strong>
				<!-- <small class="text-muted mr-2">42 seconds ago</small> -->
			</div>
		</template>
		<h5>{{ message }}</h5>
	</b-toast>
</template>

<script>
export default {
	data() {
		return {
			append: true,
			variant: '',
			title: '',
			visible: false,
			message: '',
			toaster: 'b-toaster-top-center',
			autoHideDelay: 3000,
		};
	},

	methods: {
		ben() {
			this.$store.commit('notifier/hideMessage');
		},
	},

	created() {
		this.$store.subscribe((mutation, state) => {
			if (mutation.type === 'notifier/showMessage') {
				this.message = state.notifier.content;
				this.variant = state.notifier.variant;
				this.title = state.notifier.title;
				this.visible = true;
			}
		});
	},
};
</script>
