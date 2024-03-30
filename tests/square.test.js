const Square = require("../lib/square.js");

describe("Square", () => {
  test("should create a purple square", () => {
    const square = new Square("purple");
    expect(square.render()).toBe(
      '<rect x="70" y="70" width="160" height="160" fill="purple"/>',
    );
  });
});
