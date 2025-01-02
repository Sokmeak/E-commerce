import HomeVue from "@/Views/HomeVue.vue";
import LayoutComponent from "@/Components/LayoutComponent.vue";
import ProductCategories from "@/Views/ProductCategories.vue";
import Products from "@/Views/Products.vue";


import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutComponent,
      children: [
        {
          path: "/",
          name: "home",
          component: HomeVue
        },
        {
          path: "/categories/:categoryId",
          name: "category",
          component:ProductCategories,
          props: true,
        },
        {

          // How to get the product details from the clicked product?
          path: "/products/:productId",
          name: "product",
          component: Products,
          props: true,
        }
      ]
    },
  
  ]
});

export default router;
