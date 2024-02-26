// index
import shapes from "./lib/shapes.js";
const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();
const Triangle = new shapes.Triangle();
const Circle = new shapes.Circle();
const Square = new shapes.Square();
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three letters",
    validate: function (input) {
      if (input.length > 3) {
        return "Please enter up to three letters";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "color",
    message: "Enter a color keyword or hexadecimal number",
  },
];

prompt(questions).then((answers) => {
  if (answers.shape === "Circle") {
    Circle(answers.text, answers.color);
  } else if (answers.shape === "Square") {
    Square(answers.text, answers.color);
  } else if (answers.shape === "Triangle") {
    Triangle(answers.text, answers.color);
  } else {
    console.log("Invalid shape");
  }
});

