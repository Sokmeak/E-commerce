<template>
  <div class="product-list">
    <ProductCategory
      v-for="(product, index) in products"
      :key="index"
      :name="product.name"
      :productCount="product.productCount"
      :image="product.image"
      :color="product.color" />
  </div>
</template>
<script>
import axios from "axios";
import ProductCategory from "@/Components/ProductCategory.vue";

export default {
  components: { ProductCategory },
  data() {
    return {
      products: [],
    };
  },

  methods: {
    fetchProducts() {
      axios
        .get("http://localhost:3000/api/categories")
        .then((response) => {
          console.log(response.data); // Access the data

          this.products = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },

  async mounted() {
    this.fetchProducts();
  },
};
</script>
<style scoped>
.product-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  /* padding: 20px; */
  /* background-color: #333; */
}
.product-image {
  width: 90px;
  height: 90px;
  object-fit: cover;
  margin-bottom: 8px;
}
</style>
