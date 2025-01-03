<template>
  <div class="tabContainer">
    <ul class="tabs">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectedTab = tab"
        :class="{ active: selectedTab === tab }"
      >
        {{ tab }}
      </li>
    </ul>

    <div class="tab-content">
      <p v-if="selectedTab === 'Description'">{{ detailsDes }}</p>
      <!-- <p v-if="selectedTab === 'Description'">{{ productName }}</p> -->
      <p v-if="selectedTab === 'Additional Info'">
        {{ additionalInfo }}
      </p>
      <div v-if="selectedTab === 'Reviews'">
        <ul>
          <li v-for="(review, index) in reviews" :key="index">
            <div class="reviewItem">
              <div class="profile">
                <div class="img"></div>
                <!-- <img :src="review.avatar" alt="Avatar" /> -->
              </div>
              <div>
                <p class="reviewerName">{{ review.name }}</p>
                <p>{{ review.description }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      tabs: ["Description", "Additional Info", "Reviews"],
      selectedTab: "Description",

      reviews: [
        { name: "Alice", description: "Great product! Highly recommend." },
        { name: "Bob", description: "Good value for the price." },
        {
          name: "Charlie",
          description: "Average quality, but fast delivery.",
        },
      ],

      detailsDes:
        "Information about the product.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",

      additionalInfo:
        "More information about the product.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",

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
};
</script>

<style>
.profile {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 1rem;
}
.reviewerName {
  font-weight: bold;
  font-size: large;
}
.img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: lightgreen;
}
.reviewItem {
  display: flex;
  flex-direction: row;

  gap: 1rem;
  margin-bottom: 1rem;
}
.tabContainer {
  font-family: "Quicksand";
  padding: 1rem;
  margin-top: 1rem;
}
.tabs {
  font-family: "Quicksand";
  display: flex;
  list-style: none;
  cursor: pointer;
}
.tabs li {
  margin-right: 10px;
  padding: 5px;
}
.tabs li.active {
  font-weight: bold;

  width: fit-content;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  background-color: rgb(193, 224, 193);
  margin-bottom: 10px;
}
.tab-content {
  margin-top: 10px;
}
ul {
  list-style: none;
}
</style>
