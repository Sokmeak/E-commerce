<template>
  <div class="product-lists">
    <Product
      v-for="(product, index) in stores.products"
      :key="index"
      :promotionAsPercentage="product.promotionAsPercentage"
      :image="product.image"
      :productGroup="product.group"
      :productName="product.name"
      :rating="product.rating"
      :size="product.size"
      :price="product.price"
    >
    </Product>
  </div>
</template>

<script>
import Product from "../Components/Product.vue";
import { useProductStore } from "@/stores/product";

export default {
  setup() {
    const stores = useProductStore();
    return { stores };
  },
  components: {
    Product,
  },

  async mounted() {
    this.stores.fetchProduct();
  },
};
</script>
<style scoped>
.product-lists {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 0.8rem;
}
</style>

<!-- next step -->
<!-- apply add to card button -->
<!-- getter functions -->
