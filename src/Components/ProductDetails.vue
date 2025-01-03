<template>
  <div class="product-detail">
    <!-- Stock Status -->
    <p
      class="stock-status"
      :class="{
        'in-stock': stockStatus === 'In Stock',
        'low-stock': stockStatus === 'Low Stock',
        'out-of-stock': stockStatus === 'Out of Stock',
      }"
    >
      {{ stockStatus }}
    </p>

    <!-- Product Title and Ratings -->
    <h1>{{ product.name }}</h1>
    <div class="ratings">
      <span
        v-for="star in 5"
        :key="star"
        class="star"
        :class="{ filled: star <= product.rating }"
        >★</span
      >
      <!-- <span>({{ product.reviews.length }} reviews)</span> -->
      <span>({{ 3 }} reviews)</span>
    </div>

    <!-- Price -->
    <!-- <div class="price">
      <span class="current-price">${{ product.price }}</span>
      <span v-if="product.oldPrice" class="old-price"
        >${{ product.oldPrice }}</span
      >
    </div> -->

    <div class="price">
      <span class="current-price"> $ {{ discountedPrice }} </span>
      <span v-if="product.promotionAsPercentage > 0" class="old-price"
        >${{ product.price }}
      </span>
      <!-- {{ price }} -->
    </div>

    <!-- Description -->
    <p class="description">{{ product.description }}</p>

    <!-- Quantity and Buttons -->
    <div class="actions">
      <input type="number" v-model="quantity" min="1" class="quantity-input" />
      <button class="btn add-to-cart" @click="addToCart">
        <i class="fa-solid fa-plus"></i> Add To Cart
      </button>
      <div @click="toggle = !toggle">
        <button v-if="toggle" class="btn wishlist">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button v-else class="btn wishlist">
          <i class="fa-solid fa-heart"></i>
        </button>
      </div>

      <button class="btn compare"><i class="fa-solid fa-shuffle"></i></button>
    </div>

    <!-- Vendor and SKU -->
    <p class="meta-info">
      <strong>Vendor:</strong> {{ vendor }}<br />
      <strong>SKU:</strong> {{ sku }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      quantity: 1,
      toggle: true,
      sku: "FWM15VKT",
      vendor: "NestMart",
    };
  },
  methods: {
    addToCart() {
      alert(`${this.quantity} ${this.product.name}(s) added to cart!`);
    },
    // toggleIcon(){
    //   console.log("toggle icon"+this.toggle);

    //   this.toggle = !this.toggle;
    // }
  },
  computed: {
    stockStatus() {
      if (this.product.instock > 10) {
        return "In Stock";
      } else if (this.product.instock > 0) {
        return "Low Stock";
      } else {
        return "Out of Stock";
      }
    },

    discountedPrice() {
      return (this.product.price * (1 - this.product.promotionAsPercentage / 100)).toFixed(2);
    },
  },
};
</script>

<style>
/* General Styles */
.product-detail {
  font-family: "Quicksand";
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  line-height: 1.6;
  margin: 20px;
}

/* Stock Status */
.stock-status {
  font-weight: bold;
  width: fit-content;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  background-color: rgb(193, 224, 193);
  margin-bottom: 10px;
}
.stock-status.in-stock {
  color: green;
}
.stock-status.low-stock {
  color: orange;
}
.stock-status.out-of-stock {
  color: red;
}

/* Ratings */
.ratings {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.star {
  font-size: 20px;
  color: #ccc;
  margin-right: 3px;
}
.star.filled {
  color: gold;
}

/* Price */
.price {
  margin: 10px 0;
  font-size: 24px;
}
.current-price {
  color: green;
  font-weight: bold;
}
.old-price {
  color: gray;
  text-decoration: line-through;
  font-size: smaller;
  margin-left: 10px;
}

/* Description */
.description {
  margin: 15px 0;
}

/* Actions */
.actions {
  display: flex;
  align-items: center;
  margin: 15px 0;
}
.quantity-input {
  height: 2rem;
  width: 50px;
  margin-right: 10px;
  font-size: large;
  text-align: center;
}
.btn {
  padding: 10px 15px;
  margin-right: 10px;
  border: none;
  cursor: pointer;
}
.add-to-cart {
  background-color: green;
  color: white;
}
.wishlist {
  background-color: white;
  color: black;
  border: 1px solid gray;
}
.compare {
  background-color: lightgray;
  color: black;
}

/* Meta Info */
.meta-info {
  margin-top: 20px;
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
  }
   -->
