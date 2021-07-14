export function isObject(value) {
  return typeof value === 'object' && value !== null;
}

export function randomNum() {
  return new Date().getTime() + parseInt(Math.random() * 10000);
}
