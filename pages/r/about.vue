<template>
  <div>AboutPage</div>
</template>

<script>
export default {
  name: 'AboutPage',
  layout: 'default',
  head() {
    return {
      title: 'About',
    }
  },
  mounted() {
    this.$bvToast.show('my-toast')
    this.$noty.show({
      title: 'Просто инфа',
      content: 'Какой-то контент',
      variant: 'success',
    })
  },
}
</script>
