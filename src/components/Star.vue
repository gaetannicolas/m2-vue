<template>
  <div class="star" :style="`top: ${getRandomY()}px; left: ${getRandomX()}px;`" />
</template>

<script>
import { randomX, randomY } from "../helpers/random";

export default {
  name: "Star",
  methods: {
    getRandomX() {
      return randomX();
    },
    getRandomY() {
      return randomY();
    },
  }
}
</script>

<style>

.star {
  position: absolute;
  background-color: white;
  border-radius: 100%;
  height: 4px;
  width: 4px;
}
</style>