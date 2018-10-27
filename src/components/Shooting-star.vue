<template>
  <div 
    class="star shooting-star"
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
    style() {
      return `
        top: ${this.randomY}px;
        left: ${this.randomX}px;
      `;
    }
  },
  mounted() {
    let num = Math.floor(Math.random() * 600) + 1; // this will get a number between 1 and 99;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
    const starDirection = `${num}px`;
    this.$refs.star.style.setProperty("--star-direction", starDirection);
  }
};
</script>

<style lang="scss" scoped>
:root {
  --star-direction: 300px;
}

.shooting-star {
  position: absolute;
  left: 0 !important;
  height: 6px !important;
  width: 6px !important;
  background-color: white;
  border-radius: 100%;
  animation: move 6s;
  box-shadow: 0px 0px 2px 1px white;
}

@keyframes move {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(1800px, var(--star-direction));
  }
}
</style>

