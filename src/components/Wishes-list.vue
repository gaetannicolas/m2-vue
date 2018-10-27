<template>
  <ul class="wishes-list">
    <li>
      <span class="wish-author">Username</span>
      <p class="wish-content">
        I wish I was a unicorn !
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "WishesList"
};
</script>

<style lang="scss" scoped>
.wishes-list {
  position: fixed;
  right: 10%;
  bottom: 5%;
  color: white;
}

.wish-author {
  padding-bottom: 0.5rem;
  border-bottom: 1px solid white;
}

.wish-content {
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed white;
}
</style>
