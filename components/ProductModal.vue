<template>
    <b-modal v-model="showModal" title="Заголовок модального окна">
      <div>
        <!-- Здесь вы можете отображать информацию о продукте, используя пропсы -->
        <h3>{{ product }}</h3>
      </div>
    </b-modal>
  </template>
  
  <script>
  export default {
    props: {
      showModal: Boolean, // Пропс для отображения/скрытия модального окна
      product: Object, // Пропс для передачи информации о продукте
    },
  };
  </script>