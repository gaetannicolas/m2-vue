<template>
  <div 
    class="star shooting-star"
    :style="style"
  >

  </div>
</template>

<script>
import { randomX, randomY } from "../helpers/random";

export default {
  name: "Star",
  computed: {
    randomX() {
      return randomX();
    },
    randomY() {
      return randomY();
    },
    style() {
      return `
        top: ${this.randomY}px;
        left: ${this.randomX}px;
      `;
    }
  }
};
</script>

<style lang="scss" scoped>
.star {
  position: absolute;
  background-color: red;
  border-radius: 100%;
  height: 6px;
  width: 6px;
}
</style>

