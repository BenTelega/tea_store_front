<template>
	<div>
		<b-container>
			<h1>Регистрация</h1>
			<b-form>
				<b-form-group label="Имя пользователя" label-for="username-input">
					<b-form-input
						id="username-input"
						v-model="username"
						required
					></b-form-input>
				</b-form-group>

				<b-form-group label="Пароль" label-for="password-input">
					<b-form-input
						id="password-input"
						v-model="password"
						type="password"
						required
					></b-form-input>
				</b-form-group>

				<b-button @click.prevent="register" variant="primary"
					>Зарегистрироваться</b-button
				>
			</b-form>
		</b-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			password: '',
		};
	},
	methods: {
		async register() {
			try {
				const response = await this.$axios.post('/auth/register', null, {
					params: {
						username: this.username,
						password: this.password,
					},
				});

				this.$bvToast.show('my-toast');
				this.$noty.show({
					title: 'Ура',
					content: 'Успешная регистрация',
					variant: 'success',
				});

				const form = new FormData();

				form.append('username', this.username);
				form.append('password', this.password);

				let resp = await this.$auth.loginWith('local', { data: form });

				console.log('Успешный вход', resp);
				this.$router.push('/store'); // Перенаправление на страницу после успешного входа
				this.$bvToast.show('my-toast');
				this.$noty.show({
					title: 'Ура',
					content: 'Успешный вход',
					variant: 'success',
				});

				// Обработайте успешный ответ от сервера (например, отображение уведомления)
			} catch (error) {
				console.error(error);
				this.$bvToast.show('my-toast');
				this.$noty.show({
					title: 'Ошибка',
					content: 'Такой логин уже используется',
					variant: 'danger',
				});
				// Обработайте ошибку (например, отображение сообщения об ошибке)
			}
		},
	},
};
</script>
