<template>
  <nav>
    <h1>{{ classify }}</h1>
    <div class="product-classify">
      <a href="#">All</a>
      <a href="#">Milks & Daries</a>
      <a href="#">Coffe & Teas</a>
      <a href="#">Pet Foods</a>
      <a href="#">Meals</a>
      <a href="#">Vegetables</a>
      <a href="#">Fruits</a>
    </div>
  </nav>
</template>
<script>
export default {
  props: {
    classify: String,
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;

  flex-direction: row;
  justify-content: space-between;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: blue;
}

.product-classify {
  display: flex;
  align-items: center;
  gap: 2rem;
}
</style>
