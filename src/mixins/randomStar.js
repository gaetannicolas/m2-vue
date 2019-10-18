import { randomX, randomY } from "../helpers/random";

const randomStar = {
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
    },
  }
};

export default randomStar;
