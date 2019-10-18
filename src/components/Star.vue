<template>
  <div 
    class="star"
    :style="style"
  >

  </div>
</template>

<script>
// import { randomX, randomY } from "../helpers/random";
import randomStar from "../mixins/randomStar"

export default {
  mixins: [randomStar],
  name: "Star",
};
</script>

<style lang="scss" scoped>
.star {
  position: absolute;
  background-color: white;
  border-radius: 100%;
}
</style>

