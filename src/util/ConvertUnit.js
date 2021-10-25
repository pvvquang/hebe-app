export default function ConvertUnit(money) {
  const unitVN = money * 23000;
  return unitVN.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
