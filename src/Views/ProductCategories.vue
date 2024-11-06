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
      products: [
        {
          name: "Buger",
          productCount: 14,
          image: "./public/images/Hamburger.svg",
          color: "#F2FCE4",
        },
        {
          name: "Peach",
          productCount: 17,
          image: "./public/images/Peach.svg",
          color: "#FFFCEB",
        },
        {
          name: "Organic Kiwi",
          productCount: 21,
          image: "./public/images/Kiwi.svg",
          color: "#ECFFEC",
        },
        {
          name: "Red Apple",
          productCount: 25,
          image: "./public/images/RedApple.svg",
          color: "#FEEFEA",
        },
        {
          name: "Snack",
          productCount: 34,
          image: "./public/images/snacks.svg",
          color: "#FFF3EB",
        },
        {
          name: "Black Ples",
          productCount: 63,
          image: "./public/images/BlackPulm.svg",
          color: "#FFF3FF",
        },
        {
          name: "Vegetable",
          productCount: 53,
          image: "./public/images/Vegetables.svg",
          color: "#F2FCE4",
        },
        {
          name: "Headphone",
          productCount: 25,
          image: "./public/images/HeadPhone.svg",
          color: "#FFFCEB",
        },

        {
          name: "Cake and Milk",
          productCount: 53,
          image: "./public/images/CakeAndMilk.svg",
          color: "#F2FCE4",
        },

        {
          name: "Orange",
          productCount: 63,
          image: "./public/images/Orange.svg",
          color: "#FFF3FF",
        },
      ],

      // products  : [],
    };
  },

  // async mounted() {
  //   try {
  //      const response = await fetch("http://localhost:3000/api/categories");
  //     const data = await response.json(); // Parse JSON data
  //     console.log(data);
  //     this.products = data; // Assign data to products array
  //     console.log("Fetched categories:", data);
  //     console.log(data[0].productCount)
  //     alert("Data fetched successfully");
    
  //   } catch (error) {
  //     console.error("Error fetching promotions:", error);
  //   }
  
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
