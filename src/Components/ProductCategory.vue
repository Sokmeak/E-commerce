<template>

<router-link :to="`/categories/${categoryId}`" class="card-link">
  <div
    :style="{
      backgroundColor: color,
    }"
    class="product-category"
  >
    <img
      :src="'http://localhost:3000/' + image"
      :alt="name"
      class="product-image"
    />
    <h4>{{ name }}</h4>
    <p>{{ productCount }} items</p>
  </div>

</router-link>
</template>

<script>
export default {
  props: {
    name: String,
    productCount: Number,
    image: String,
    color: String,
    categoryId: Number,
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

.card-link {
  text-decoration: none; /* Remove underline for links */
  color: inherit; /* Ensure text color stays the same */
}

.product-category {
  display: flex;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 1000;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 7.2rem;
  padding: 0.5rem;
  background-color: #f0f2f5;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3 ease;
}
.product-category p {
  font-weight: 400;
  color: gray;
}
.product-image {
  width: 4.5rem;
  height: 4.5rem;
  margin: 0.1rem;
}
.product-category:hover {
  border: 2px solid rgb(142, 219, 152);
  transform: scale(1.1);
  transition: 0.2s;
}
</style>
