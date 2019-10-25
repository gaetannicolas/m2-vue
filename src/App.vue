<template>
  <div id="app">
    <Moon />
    <login-modal v-if="!isLoggedIn" @onSavePseudo="setLogin" />
    <transition-group name="fade">
      <common-star 
        v-for="star in totalStars"
        :key="star"
      />
    </transition-group>
    <shooting-star 
      v-if="isShootingStarVisible"
    />
    <input 
      type="range"
      name="stars" 
      min="10"
      max="600"
      v-model.number="totalStars"
    />
  </div>
</template>

<script>
import CommonStar from "@/components/Common-star";
import ShootingStar from "@/components/Shooting-star";
import Moon from "@/components/Moon";
import LoginModal from "@/components/Login-modal";

export default {
  name: "app",
  components: {
    CommonStar,
    ShootingStar,
    Moon,
    LoginModal
  },
  data() {
    return {
      totalStars: 200,
      isShootingStarVisible: true,
      pseudo: "",
    };
  },
  methods: {
    setLogin(pseudo) {
      this.pseudo = pseudo;
      localStorage.setItem("pseudo", pseudo);
    }
  },
  computed: {
    isLoggedIn() {
      return this.pseudo
    }
  },
  created() {
    const pseudo = localStorage.getItem("pseudo")
    if (pseudo) {
      this.pseudo = pseudo
    }
  },
  mounted() {
    setInterval(() => {
      this.isShootingStarVisible = !this.isShootingStarVisible;
    }, 6000);
  }
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

/* Transitions */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
