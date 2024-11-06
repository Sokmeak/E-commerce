<template>
  <div
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    :style="{
      hoverStyles,
      backgroundColor: color,
      border: isHovered ? `2px solid blue` : '',
    }"
    class="promotion-banner">
    <div class="Banner-content">
      <h2>{{ title }}</h2>
      <shop-button :bg-btn-color="buttonColor" :message="title" />
    </div>
    <div class="bannerImg">
      <img :src="image" :alt="title" class="banner-image" />
    </div>
  </div>
</template>

<script>
import ShopButton from "./ShopButton.vue";

export default {
  components: {
    ShopButton,
  },
  props: {
    title: String,
    image: String,
    color: String,
    buttonColor: String,
    url: String,
  },
  method: {
    shopNow() {
      alert("Redirecting to shop!");
    },

  },
  data(){
    return{
      isHovered : false,
    }
  },
};
</script>

<style scoped>
.Banner-content {
  width: inherit;
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
}
.promotion-banner {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 500px;
  height: 300px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 10px;
  transition: all 0.1s ease-in;
}

.bannerImg {
  /* width: 300px; */
  height: 300px;
  display: flex;
  align-items: end;
}
.banner-image {
  width: 180px;
  height: 180px;
  /* object-fit: cover; */
  margin-right: 20px;
}
.banner-content {
  flex: 1;
}

button {
  width: 50%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-items: center;
  padding: 8px 16px;
  color: white;
  /* background-color: #36b37e; */
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
