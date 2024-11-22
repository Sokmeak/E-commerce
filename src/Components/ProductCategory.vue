<template>
  <div
    :style="{
      backgroundColor: color,
    }"
    class="product-category">
    <img
      :src="'http://localhost:3000/' + image"
      :alt="name"
      class="product-image" />
    <h3>{{ name }}</h3>
    <p>{{ productCount }} items</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    productCount: Number,
    image: String,
    color: String,
  },

  data() {
    return {
      isHovered: false,
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300..1000&display=swap");

.product-category {
  display: flex;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 1000;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
  padding: 10px;
  background-color: #f0f2f5;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3 ease;
}
.product-category p {
  font-weight: 400;
  color: gray;
}
.product-image {
  width: 100px;
  height: 100px;
  margin: 0.5rem;
}
.product-category:hover {
  border: 2px solid rgb(142, 219, 152);
  transform: scale(1.1);
  transition: 0.2s;
}
</style>
