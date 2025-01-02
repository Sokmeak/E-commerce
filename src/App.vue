<template>
  <!-- <LayoutComponent /> -->
  <RouterView />
</template>

<script>
import HomeVue from "./Views/HomeVue.vue";
import { RouterView } from "vue-router";

export default {
  components: {
    HomeVue,
 
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
  font-family: "Quicksand";
  box-sizing: border-box;
  color: black;
}

html {
  background-color: rgb(255, 255, 255);
  font-family: "Quicksand";
}
</style>
