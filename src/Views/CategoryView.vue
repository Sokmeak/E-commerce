<template>
  <div>
    <PageHeader :name="category" />
  </div>
</template>
<script>
import PageHeader from "@/Components/PageHeader.vue";
import { useProductStore } from "@/stores/product";
import { mapState } from "pinia";

export default {
  setup() {
    const store = useProductStore();

    return {
      store
    };
  },
  components: {
    PageHeader,
  },
  props: {
    categoryId: Number,
  },
  computed: {
    ...mapState(useProductStore, {
      categories: "categories",
    }),

    

    category() {
      return this.categories[this.categoryId-1].name;
    },
  },

  mounted() {
    console.log("Get the categories: ");
    console.log(this.categoryId-1);
  },
};
</script>
<style></style>
