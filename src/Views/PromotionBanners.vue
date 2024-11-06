<template>
  <div class="promotion-banner-list">
    <PromotionBanner
      v-for="(promote, index) in promotions"
      :key="index"
      :title="promote.title"
      :image="promote.image"
      :color="promote.color"
      :buttonColor="promote.buttonColor" />
  </div>
</template>
<script>
import PromotionBanner from "@/Components/PromotionBanner.vue";
export default {
  components: { PromotionBanner },
  data() {
    return {
      promotions: [
        {
          title: "Everyday Fresh & Clean with Our Products",
          image: "./public/images/OnionNew.png",
          color: "#F0E8D5",
          buttonColor: "#36b37e",
          url: "https://www.google.com",
        },
        {
          title: "Make your Breakfast Healthy and Easy",
          
          image: "./public/images/myStraw.png",
          color: "#F3E8E8",
          buttonColor: "#36b37e",
          url: "https://www.google.com",
        },
        {
          title: "The best Organic Products Online",
         
          image: "./public/images/allveg.png",
          color: "#E7EAF3",
          buttonColor: "#FDC040",
          url: "https://www.google.com",
        },
      ],

      //  promotions: [],
    };
  },

  // async mounted() {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/promotions");
  //     const data = await response.json(); // Parse JSON data
  //     this.promotions = data; // Assign data to products array
  //     console.log("Fetched categories:", data);
  //     alert("Data fetched successfully");
  //   } catch (error) {
  //     console.error("Error fetching promotions:", error);
  //   }
  // },
};
</script>

<style scoped>
.promotion-banner-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
