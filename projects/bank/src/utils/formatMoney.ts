export default function formatMoney(money: number) {
  return new Intl.NumberFormat("de-DE").format(money);
}
