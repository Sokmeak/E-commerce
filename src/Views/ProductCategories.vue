<template>
  <div class="product-list">
    <ProductCategory
      v-for="(product, index) in stores.categories"
      :key="index"
      :name="product.name"
      :productCount="product.productCount"
      :image="product.image"
      :color="product.color"
    />
  </div>
</template>
<script>
import { useProductStore } from "@/stores/product";

import ProductCategory from "@/Components/ProductCategory.vue";

export default {
  components: { ProductCategory },

  // run at the first time

  setup() {
    const stores = useProductStore();

    return { stores };
  },
  data() {
    //   return {
    //     products: [],
    //   };
    // },
    // methods: {
    //   fetchProducts() {
    //     axios
    //       .get("http://localhost:3000/api/categories")
    //       .then((response) => {
    //         console.log(response.data); // Access the data
    //         this.products = response.data;
    //       })
    //       .catch((error) => {
    //         console.error("Error fetching data:", error);
    //       });
    //   },
    // },
  },
  async mounted() {
    this.stores.fetchCategory();
    this.stores.fetchGroup();
    this.stores.fetchProduct();
    // Test getter here

    // console.log(this.stores.categories);

    // console.log(
    //   "Categories in 'fruits' group:",
    //   this.stores.getCategoriesByGroup("fruits")
    // );

    // Test `getCategoriesByGroup`
    // const categoriesByGroup = this.stores.getCategoriesByGroup("fruits");
    // try {
    //   const categoriesByGroup = this.stores.getCategoriesByGroup("fruits");
    //   console.log("Categories in 'fruits' group:", categoriesByGroup);
    // } catch (error) {
    //   console.log(error);
    // }
    // // Test `getProductsByGroup`
    // const productsByGroup = this.stores.getProductsByGroup("fruits");
    // console.log("Products in 'fruits' group:", productsByGroup);

    // // Test `getProductsByCategory`

    try {
      console.log("product is popular" + this.stores.getPopularProducts);
    } catch (error) {
      console.log(error);
    }

    // // Test `getPopularProducts`
    // const popularProducts = this.stores.getPopularProducts;
    // console.log("Popular products:", popularProducts);
  },
};
</script>
<style scoped>
.product-list {
  display: flex;
  flex-direction: row;
  row-gap: 1rem;
  flex-wrap: wrap;
  width: 100vw;
}
.product-image {
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  margin-bottom: 0.2rem;
}
</style>
