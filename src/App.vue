<template>
  <div id="app">
    <input type="range" max="100" min="0" v-model.number="totalStars"/>
    <moon />
    <transition-group name="fade">
      <div
        v-for="star in totalStars"
        :key="star"
      >
        <star />
      </div>
    </transition-group>
  </div>
</template>

<script>
import Moon from './components/Moon'
import Star from './components/Star'

export default {
  name: "app",
  components: {
    Moon,
    Star,
  },
  data() {
    return {
      totalStars: 100
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
