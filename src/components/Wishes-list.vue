<template>
  <ul class="wishes-list">
    <li v-for="(wish, index) in wishes" :key="index">
      <span class="wish-author">{{ wish.userName }}</span>
      <p class="wish-content">
        {{ wish.wish }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "WishesList",
  props: {
    wishes: {
      type: Array,
      required: true
    }
  },
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
