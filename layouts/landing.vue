<template>
  <div>
    <div class="vw-100 vh-100 position-absolute overflow-hidden">
      <img
        src="https://picsum.photos/id/992/1920/1440"
        class="img-fluid"
        alt=""
      />
    </div>
    <Nuxt />
  </div>
</template>
<style>
@media (min-height: 576px) {
  .spec {
    max-width: 740px;
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
</style>
