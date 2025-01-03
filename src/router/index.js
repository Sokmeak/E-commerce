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
          component:() => import("@/Views/CategoryView.vue"),
          props: true,
        },
        {

          // How to get the product details from the clicked product?
          path: "/products/:productId",
          name: "product",
          component: () => import("@/Views/ProductView.vue"),
          props: true,
        }
      ]
    },
  
  ]
});

export default router;
