<template>
  <div class="modal-wrapper">
    <div class="modal">
      <h2>{{ title }}</h2>
      <form>
        <input 
          type="text"
          v-model="inputValue"
        >
        <input 
          type="submit"
          @click.prevent="submitForm"
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    submitForm() {
      this.$emit("onSubmitForm", this.inputValue);
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 2;
}

.modal {
  max-width: 400px;
  padding: 1rem 2rem;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 6px 0 rgb(61, 61, 61);
}
</style>

