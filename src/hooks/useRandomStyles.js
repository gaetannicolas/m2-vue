import { useComputed } from "vue-hooks";
import { randomX, randomY } from "@/helpers/random";

export function useRandomStyles() {
  const randomRadius = () => Math.round(Math.random() * Math.round(4));

  const getRandomRadius = randomRadius();

  const styles = useComputed(() => ({
    top: `${randomY()}px`,
    left: `${randomX()}px`,
    height: `${getRandomRadius}px`,
    width: `${getRandomRadius}px`
  }));

  return styles;
}
