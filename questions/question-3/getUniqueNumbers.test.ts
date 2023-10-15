import { getUniqueNumbers } from "./getUniqueNumbers";

describe("[getUniqueNumbers]", () => {
  it("should return unique numbers array.", () => {
    const data = [
      1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5,
      4, 4, 7, 8, 8, 0, 1, 2, 3, 1,
    ];
    expect(getUniqueNumbers(data)).toEqual([6, 9]);
  });
  it("should return unique numbers array.", () => {
    const data = [1];
    expect(getUniqueNumbers(data)).toEqual([1]);
  });
  it("should return unique numbers array.", () => {
    const data = [1, 2, 3, 1];
    expect(getUniqueNumbers(data)).toEqual([2, 3]);
  });
  it("should return empty array.", () => {
    const data = [1, 1];
    expect(getUniqueNumbers(data)).toEqual([]);
  });
});
