type GroupTypeProps<T> = { [key: string]: T[] };
export function groupBy<T>(list: T[], getGroupKey: (item: T) => string): GroupTypeProps<T> {
  return list.reduce((result: GroupTypeProps<T>, current: T) => {
    const groupKey = getGroupKey(current);
    if (!result[groupKey]) {
      result[groupKey] = [current];
    } else {
      result[groupKey].push(current);
    }
    return result;
  }, {});
}
