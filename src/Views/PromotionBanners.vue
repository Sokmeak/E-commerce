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
import axios from "axios";
import PromotionBanner from "@/Components/PromotionBanner.vue";
export default {
  components: { PromotionBanner },
  data() {
    return {
      promotions: [],
    };
  },

  methods: {
    fetchPromotion() {
      axios
        .get("http://localhost:3000/api/promotions")
        .then((response) => {
          console.log(response.data); // Access the data

          this.promotions = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },

  async mounted() {
    this.fetchPromotion();
  },
};
</script>

<style scoped>
.promotion-banner-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
