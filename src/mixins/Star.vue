<template>
  <div 
    class="star"
    :style="style"
    ref="star"
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
    randomRadius() {
      return Math.round(Math.random() * Math.round(4));
    },
    style() {
      return `
        top: ${this.randomY}px;
        left: ${this.randomX}px;
        height: ${this.randomRadius}px;
        width: ${this.randomRadius}px;
      `;
    }
  }
};
</script>

<style lang="scss" scoped>
.star {
  position: absolute;
  background-color: white;
  border-radius: 100%;
}
</style>
