<template>
  <div id="app">
    <transition name="fade">
      <Modal
        v-if="!isLoggedIn"
        title="Entrez votre pseudo :"
        @onSubmitForm="setLogin"
      />
      <Modal
        v-if="isLoggedIn && makeAWish"
        title="Faites un voeux !"
        @onSubmitForm="setWish"
      />
    </transition>
    <Moon />
    <transition-group name="fade">
      <common-star 
        v-for="star in totalStars"
        :key="star"
      />
    </transition-group>
    <shooting-star 
      v-if="makeAWish"
    />
    <input 
      type="range"
      name="stars" 
      min="10"
      max="600"
      v-model.number="totalStars"
    />
    <wishes-list
      :wishes="wishes"
    />
  </div>
</template>

<script>
import CommonStar from "@/components/Common-star";
import ShootingStar from "@/components/Shooting-star";
import Moon from "@/components/Moon";
import Modal from "@/components/Modal";
import WishesList from "@/components/Wishes-list";

import { db } from "@/services/firebase";

export default {
  name: "app",
  components: {
    CommonStar,
    ShootingStar,
    Moon,
    Modal,
    WishesList
  },
  data() {
    return {
      userName: "",
      totalStars: 200,
      makeAWish: true
    };
  },
  firebase: {
    wishes: db.ref("wishes")
  },
  computed: {
    isLoggedIn() {
      return this.userName;
    }
  },
  methods: {
    setLogin(userName) {
      this.userName = userName;
      localStorage.setItem("userName", userName);
    },
    setWish(wish) {
      db.ref("wishes").push({
        userName: this.userName,
        wish
      });
      this.makeAWish = false;
    }
  },
  mounted() {
    setInterval(() => {
      this.makeAWish = !this.makeAWish;
    }, 6000);
  },
  created() {
    const userName = localStorage.getItem("userName");
    if (userName) {
      this.userName = userName;
    }
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
