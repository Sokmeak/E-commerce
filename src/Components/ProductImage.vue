<template>
  <div class="product-image">
    <div class="imageContainer">
      <div class="zoom">
        <i class="fa-solid fa-magnifying-glass-plus"></i>
      </div>
      <img
        :src="selectedImage"
        alt="Product Image"
        class="main-image"
        @mousemove="handleMouseMove"
        @mouseleave="resetZoom"
        :style="imageStyles"
      />
    </div>

    <div class="thumbnails">
      <div @click="PreviousImage" class="arrowContainer">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <img
        v-for="(image, index) in localImages"
        :key="index"
        :src="image"
        alt="Thumbnail"
        @click="selectImage(image)"
        :class="{ active: selectedImage === image }"
      />
      <div @click="NextImage" class="arrowContainer">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["images"],
  props: {
    images: String,
    myImages2: Array,
  },

  data() {
    const imagePath = "http://localhost:3000/" + this.images;
    return {
      index: 0,
      transformOrigin: "center center",
      zoomScale: 1, // Default zoom scale

      //  myImages2: this.myImages2.unshift(imagePath),

      localImages: [imagePath, ...this.myImages2], // Create a local copy with imagePath prepended
      selectedImage: null,

      // selectedImage: this.image,
    };
  },

  mounted() {
    this.selectedImage = this.localImages[0];
  },

  methods: {
    selectImage(image) {
      this.selectedImage = image;
      console.log(this.localImages);
    },
    PreviousImage() {
      if (this.index >= 0) {
        this.selectedImage =
          this.localImages[this.localImages.indexOf(this.selectedImage) - 1];
        this.index = this.localImages.indexOf(this.selectedImage) - 1;
      } else [alert("No more images to show")];
    },
    NextImage() {
      if (this.index < this.localImages.length) {
        this.selectedImage =
          this.localImages[this.localImages.indexOf(this.selectedImage) + 1];
        this.index = this.localImages.indexOf(this.selectedImage) + 1;
      } else {
        alert("No more images to show");
      }
    },

    handleMouseMove(event) {
      const container = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - container.left) / container.width) * 100;
      const y = ((event.clientY - container.top) / container.height) * 100;

      this.transformOrigin = `${x}% ${y}%`;
      this.zoomScale = 1.5; // Smooth zoom-in
    },
    resetZoom() {
      this.transformOrigin = "center center"; // Reset position
      this.zoomScale = 1; // Reset zoom
    },
  },

  computed: {
    imageStyles() {
      return {
        transform: `scale(${this.zoomScale})`,
        transformOrigin: this.transformOrigin,
        transition: "transform 0.3s ease",
      };
    },
  },
};
</script>

<style>
.arrowContainer {
  display: flex;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.arrowContainer:hover {
  background-color: rgb(193, 224, 193);
  color: rgb(39, 36, 36);
}
.imageContainer {
  width: 50vw;
  height: 60vh;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden; /* Ensures no overflow */
  align-items: end;
  margin: 20px 0;
}

.zoom {
  font-size: larger;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.main-image {
  padding: 2rem;
  width: 70%;
  height: 90%;
  max-height: 400px;
  cursor: zoom-in;
  object-fit: cover;
}

.thumbnails {
  display: flex;
  justify-content: left;

  align-items: center;
  gap: 1rem;
}
.thumbnails img {
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  margin: 5px;
  cursor: pointer;
}
.thumbnails img.active {
  border: 2px solid green;
}

.magnify {
  width: 100%;
  height: 100%;
  background-size: cover; /* Make sure the background fits the div */
  background-repeat: no-repeat;
  background-position: center;
  transition: background-size 0.3s ease, background-position 0.3s ease;
}
</style>
