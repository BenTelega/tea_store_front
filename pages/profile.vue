<template>
  <div><h1>PROFILE</h1></div>
</template>
<script>
export default {
  name: 'ProfilePage',
  layout: 'default',
  head() {
    return {
      title: 'Profile',
    }
  },
  mounted() {
    this.$bvToast.show('my-toast')
    this.$noty.show({
      title: 'Просто инфа',
      content: 'Страница профиля',
      variant: 'primary',
    })
  },
}
</script>
