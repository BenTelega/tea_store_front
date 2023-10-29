<template>
  <div>
    <b-container>
      <h1>Вход</h1>

      <nuxt-link to="registration">Регистрация</nuxt-link>
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

        <b-button @click.prevent="login" variant="primary">Войти</b-button>
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
    async login() {
      const form = new FormData()

      form.append('username', this.username)
      form.append('password', this.password)

      try {
        let response = await this.$auth.loginWith('local', { data: form })
        console.log('----', response)
        if (response.status >= 200 && response.status < 300) {
          // Обработка успешного входа
          console.log('Успешный вход', response)
          this.$router.push('/store') // Перенаправление на страницу после успешного входа
          this.$bvToast.show('my-toast')
          this.$noty.show({
            title: 'Ура',
            content: 'Успешный вход',
            variant: 'success',
          })
        } else {
          // Обработка других успешных статусов
          console.log('Другой успешный статус', response)
          // Выполните действия в соответствии с вашими требованиями
        }
      } catch (err) {
        // Обработка ошибки, если вход не удался
        console.error('Ошибка входа', err)
        this.$bvToast.show('my-toast')
        this.$noty.show({
          title: 'Ошибка',
          content: 'Неверный логин или пароль',
          variant: 'danger',
        })
      }
    },
  },
}
</script>
