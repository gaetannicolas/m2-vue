/**
 * RandomX returns a random number between 0 and client width
 * @returns {number}
 */
export function randomX() {
  return Math.floor(
    Math.random() * Math.floor(document.documentElement.clientWidth)
  );
}

/**
 * RandomY returns a random number between 0 and client height
 * @returns {number}
 */
export function randomY() {
  return Math.floor(
    Math.random() * Math.floor(document.documentElement.clientHeight)
  );
}
