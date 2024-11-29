<template>
  <div>
    <Menu classify="Featured Categories"></Menu>
    <product-categories />
    <promotion-banners />

    <Menu classify="Popular products"></Menu>

    <Products></Products>
    <ProductPopular></ProductPopular>

    <getProductsviaCat></getProductsviaCat>

    <getProductByGroup></getProductByGroup>

    <getCategoryByGroup> </getCategoryByGroup>
  </div>
</template>

<script>
import ProductCategories from "./ProductCategories.vue";
import PromotionBanners from "./PromotionBanners.vue";
import ProductPopular from "../Components/ProductPopular.vue";
import getProductsviaCat from "../Components/getProductVaiCategory.vue";
import getProductByGroup from "../Components/getProductByGroup.vue";
import getCategoryByGroup from "../Components/getCategoryByGroup.vue";
import Menu from "../Components/Menu.vue";
import Products from "@/Views/Products.vue";

export default {
  components: {
    ProductCategories,
    PromotionBanners,
    ProductPopular,
    getProductsviaCat,
    getProductByGroup,
    getCategoryByGroup,
    Menu,
    Products,
  },
};
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
</style>
