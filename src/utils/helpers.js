export const toCommas = value => {
  if (isNaN(value)) return value;

  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
