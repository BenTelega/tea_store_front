<template>
  <div>
    <b-container>
      <h1>Регистрация</h1>
      <b-form @submit="register">
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

        <b-button type="submit" variant="primary">Зарегистрироваться</b-button>
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
    }
  },
  methods: {
    async register() {
      try {
        const response = await this.$axios.post('/auth/register', null, {
          params: {
            username: this.username,
            password: this.password,
          },
        })

        // Обработайте успешный ответ от сервера (например, отображение уведомления)
      } catch (error) {
        console.error(error)
        alert('kjj')
        // Обработайте ошибку (например, отображение сообщения об ошибке)
      }
    },
  },
}
</script>
