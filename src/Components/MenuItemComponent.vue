<template>
  <div v-if="type === 1" class="type-1">
    <button @click="handleClick">
      <i :class="iconClass"></i>
      {{ buttonName }}
    </button>
  </div>

  <!-- <div v-if="type === 2" class="type-2">
    
   

      <button class="styled-button">
        {{ buttonName }}
        <i class="fa-solid fa-chevron-down"></i>
      </button>

  </div> -->
  <div v-if="type === 2" class="type-2">
    <div class="dropdown" @mouseover="showDropdown" @mouseleave="hideDropdown">
      <button class="styled-button">
        {{ selectedOption || buttonName }}
        <i
          :class="[
            'fa-solid',
            isDropdownVisible ? 'fa-chevron-up' : 'fa-chevron-down',
          ]"
        ></i>
      </button>
      <ul v-show="isDropdownVisible" class="dropdown-menu">
        <li
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(option)"
          class="dropdown-item"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: Number,
    buttonName: String,
    iconClass: String,
    categoryId: Number,
    options: Array,
  },

  data() {
    return {
      isDropdownVisible: false,
      selectedOption: null,
    };
  },
  methods: {
    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    },
    selectOption(option) {
      this.selectedOption = option.label;
      this.isDropdownVisible = false;
    },

    handleClick() {
      // Emit event to parent with optional data
      this.$emit("buttonClicked", this.buttonName);
    },
  },
};
</script>
<style scoped>
.type-1 button {
  background-color: transparent;
  border: none;
  color: #7e7e7e;
  font-weight: 600;
  font-size: 14px;
}

.type-1 button:hover {
  color: #000;

  transition: ease-in-out 0.2s;
}

/* .styled-button {
 
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
} */

/* .styled-button:hover {
  background-color: #0056b3;
} */

/* .type-2 button {
    background-color: transparent;
    color: #7E7E7E;
    color: aqua;
    font-size: 14px;
    font-weight: bold;
    width: auto;
} */

.type-2 button:hover {
  color: #000;
  transition: ease-in-out 0.2s;
}

button {
  background-color: none;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
  font-weight: 500;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;

  font-family: "Quicksand";
  /* background-color: white;
  border: 1px solid #ccc; */
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  list-style: none;
  padding: 0;
  margin: 2px 0;
}

.dropdown-item {
  padding: 10px 15px;
  cursor: pointer;
}
ul,
li {
  padding: 4rem;
  cursor: pointer;

  list-style: none;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}
</style>
