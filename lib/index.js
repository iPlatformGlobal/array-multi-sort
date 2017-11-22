export default function arrayMultiSort(arr, sortRules) {
  const columns = sortRules.map(k => k.key);
  const orderBy = sortRules.map(k => k.direction);

  function arrayMultiSortRecursive(a, b, columns, orderBy, index) {
    const direction = orderBy[index] == 'DESC' ? 1 : 0;
    const isNumeric = !isNaN(a[columns[index]] - b[columns[index]]);

    const x = isNumeric ? a[columns[index]] : a[columns[index]].toLowerCase();
    const y = isNumeric ? b[columns[index]] : b[columns[index]].toLowerCase();

    if (x < y) return direction === 0 ? -1 : 1;

    if (x == y) return columns.length - 1 > index ? arrayMultiSortRecursive(a, b, columns, orderBy, index + 1) : 0;

    return direction === 0 ? 1 : -1;
  }

  return arr.sort((a, b) => arrayMultiSortRecursive(a, b, columns, orderBy, 0));
}