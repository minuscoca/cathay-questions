export function getUniqueNumbers(nums: number[]) {
  const record: Record<string, boolean> = {};
  const uniqueValues: number[] = [];

  for (const num of nums) {
    if (record[num] === undefined) {
      record[num] = true;
    } else {
      record[num] = false;
    }
  }

  for (const [key, isUnique] of Object.entries(record)) {
    if (isUnique) {
      uniqueValues.push(Number(key));
    }
  }

  console.log("[getUniqueNumbers]", uniqueValues);

  return uniqueValues;
}
