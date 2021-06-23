import { getXAttribute } from "../utils";

describe("getXAttribute, (Unit)", () => {
  test("should properly return 60% if percentage is less than 10", () => {
    expect(getXAttribute(9)).toBe("60%");
  });

  test("should properly return 68% if percentage is less than 99", () => {
    expect(getXAttribute(65)).toBe("70%");
  });

  test("should properly return 75% if percentage is greater than 99", () => {
    expect(getXAttribute(100)).toBe("77%");
  });
});
