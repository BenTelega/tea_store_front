export default ({ app, store }, inject) => {
	inject('noty', {
		show({ content = '', variant = '', title = '' }) {
			store.commit('notifier/showMessage', { content, variant, title });
		},
	});
};
