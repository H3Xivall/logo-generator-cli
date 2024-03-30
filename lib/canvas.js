const Circle = require("./circle.js");
const Square = require("./square.js");
const Triangle = require("./triangle.js");

class Text {
  constructor(text, tColor) {
    this.text = text;
    this.tColor = tColor;
  }

  render() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tColor}">${this.text}</text>`;
  }
}

function createCanvas(answer) {
  const text = new Text(answer.text, answer.tColor);
  let shape;

  if (answer.shape === "Circle") {
    shape = new Circle(answer.shapeColor);
  } else if (answer.shape === "Square") {
    shape = new Square(answer.shapeColor);
  } else if (answer.shape === "Triangle") {
    shape = new Triangle(answer.shapeColor);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" version="1.1">
        ${shape.render()}
        ${text.render()}
    </svg>`;
}

module.exports = { Text, createCanvas };
