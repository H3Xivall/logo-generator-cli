const Circle = require("../lib/circle.js");

describe("Circle", () => {
  test("should create a red circle", () => {
    const circle = new Circle("red");
    expect(circle.color).toBe("red");
  });
  test("should render an orange circle with proper parameters", () => {
    const circle = new Circle("orange");
    expect(circle.render()).toBe(
      `<circle cx="150" cy="100" r="80" fill="orange"/>`,
    );
  });
});
