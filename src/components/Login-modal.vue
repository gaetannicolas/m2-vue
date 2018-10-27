<template>
  <div class="login-wrapper">
    <div class="login-modal">

    </div>
  </div>
</template>

<script>
export default {
  name: "LoginModal"
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 2;
}

.login-modal {
  max-width: 400px;
  padding: 2rem;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 6px 0 rgb(61, 61, 61);
}
</style>

