export function convertCash(number) {
  const str = String(number).split('.').join('');

  if (str.length - 1 >= 3 && str.length - 1 < 6)
    return (number / 1000).toFixed(2) + 'k';
  else if (str.length - 1 >= 6 && str.length - 1 < 9)
    return (number / 1_000_000).toFixed(2) + 'm';
  else if (str.length - 1 >= 9)
    return (number / 1_000_000_000).toFixed(2) + 'b';
  else return number;
}
