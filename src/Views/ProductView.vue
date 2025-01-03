<template>
  <div class="navigation">
    <router-link to="/">Home</router-link>
    <i class="fa-solid icon fa-chevron-right"></i> {{ product.group }}
    <i class="fa-solid icon fa-chevron-right"></i> {{ product.name }}
  </div>
  <div v-if="product" class="productView">
    <div class="product-page">
      <ProductImage :images="product.image" :myImages2="images2" />
      <ProductDetail :product="product" />
    </div>
  </div>
  <Tabs :product="product" />
</template>

<script>
import ProductImage from "../Components/ProductImage.vue";
import ProductDetail from "../Components/ProductDetails.vue";
import Tabs from "../Components/Tabs.vue";
import { useProductStore } from "@/stores/product";
import { mapState } from "pinia";

export default {
  components: {
    ProductImage,
    ProductDetail,
    Tabs,
  },
  data() {
    return {
      images2: [
        "/public/images/red-and-green-apples.jpg",
        "/public/images/avocado.jpg",
        "/public/images/blackberries.jpg",
      ],
      //   product: {
      //     name: "Seeds of Change Organic Quinoa, Brown",
      //     rating: 4,
      //     instock:100 ,
      //     reviews: [
      //       { name: "Alice", description: "Great product! Highly recommend." },
      //       { name: "Bob", description: "Good value for the price." },
      //       {
      //         name: "Charlie",
      //         description: "Average quality, but fast delivery.",
      //       },
      //     ],
      //     price: 38,
      //     oldPrice: 42,
      //     description:
      //       "Lorem ipsum dolor sit amet, snsectetur adipiscing elit. Aliquam rem officia...",
      //     detailsDes:
      //       "Information about the product.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",

      //     vendor: "NestMart",
      //     sku: "FWM15VKT",
      //     images: [
      //       "/public/images/red-and-green-apples.jpg",
      //       "/public/images/avocado.jpg",
      //       "/public/images/blackberries.jpg",
      //     ],
      //     additionalInfo:
      //       "More information about the product.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      //   },
    };
  },

  computed: {
    ...mapState(useProductStore, {
      products: "products",
    }),
    product() {
      const productId = this.$route.params.productId;
      return this.products.find((product) => product.id == productId);
    },
  },
};
</script>

<style>
.navigation {
  text-align: left;
  gap: 1rem;
  font-family: "Quicksand";
  color: rgb(54, 119, 54);
  font-weight: 600;
  margin: 20px;
}
.icon {
  font-size: small;
}
.productView {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 20px;
}
.product-page {
  display: flex;
}
</style>

<!-- 
  product: {
    name: 'Seeds of Change Organic Quinoa, Brown',
    inStock: true,
    rating: 4,
    reviews: 40,
    price: 38,
    oldPrice: 42,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rem officia...',
    vendor: 'NestMart',
    sku: 'FWM15VKT'
  } -->
