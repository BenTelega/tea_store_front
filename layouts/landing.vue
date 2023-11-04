<template>
  <div>
    <div
      class="vw-100 vh-100 position-absolute overflow-hidden op"
      :style="{ backgroundImage: `url(${backgroundImagePath})` }"
    >
      <!-- <img src="/pic/2.jpg" class="img-fluid op" alt="" /> -->
    </div>
    <Nuxt />
  </div>
</template>
<script>
import backgroundImagePath from '~/assets/cover.jpg'
export default {
  data() {
    return { backgroundImagePath }
  },
}
</script>

<style>
@media (min-height: 576px) {
  .spec {
    max-width: 790px;
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
}
</style>
