<template>
  <div>
    <product-categories />
    <promotion-banners />

    <h1>Testing Getter functions</h1>

    <ProductPopular></ProductPopular>
    <br />

    <getProductsviaCat></getProductsviaCat>
    <br />
    <getProductByGroup></getProductByGroup>
    <br />
    <getCategoryByGroup> </getCategoryByGroup>
  </div>

  <RouterView />
</template>

<script>
import ProductCategories from "./Views/ProductCategories.vue";
import PromotionBanners from "./Views/PromotionBanners.vue";
import ProductPopular from "./Views/ProductPopular.vue";
import getProductsviaCat from "./Views/getProductVaiCategory.vue";
import getProductByGroup from "./Views/getProductByGroup.vue";
import getCategoryByGroup from "./Views/getCategoryByGroup.vue";

export default {
  components: {
    ProductCategories,
    PromotionBanners,
    ProductPopular,
    getProductsviaCat,
    getProductByGroup,
    getCategoryByGroup,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: black;
}
div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
html {
  background-color: rgb(255, 255, 255);
}
</style>
