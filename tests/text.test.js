const { Text } = require("../lib/canvas.js");

describe("Text", () => {
  test("Should create a new Text with the color Yellow", () => {
    const text = new Text("NYB", "yellow");
    expect(text.render()).toBe(
      '<text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">NYB</text>',
    );
  });
});
