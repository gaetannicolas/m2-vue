<script>
import { randomX, randomY } from "@/helpers/random";

export default {
  name: "Random",
  computed: {
    randomX() {
      return randomX();
    },
    randomY() {
      return randomY();
    },
    randomRadius() {
      return Math.round(Math.random() * Math.round(4));
    },
    style() {
      return `
                top: ${this.randomY}px;
                left: ${this.randomX}px;
                height: ${this.randomRadius}px;
                width: ${this.randomRadius}px;
            `;
    }
  },
  render() {
    return this.$scopedSlots.default
      ? this.$scopedSlots.default({
          randomCssProperties: this.style
        })
      : null;
  }
};
</script>