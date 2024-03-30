const Triangle = require("../lib/triangle.js");

describe("Triangle", () => {
  test("should create an instance of a Triangle", () => {
    const triangle = new Triangle("blue");
    expect(triangle.render()).toBe(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>',
    );
  });
});
