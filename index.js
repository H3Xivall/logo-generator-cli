const fs = require("fs");
const { createCanvas } = require("./lib/canvas.js");
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "text",
    message: "What text would you like for your logo? (Max 3 characters)",
  },
  {
    type: "input",
    name: "tColor",
    message:
      "What color would you like the text to be? (Color Keyword or Hexadecimal only)",
  },
  {
    type: "list",
    name: "shape",
    message: "What shape would you like your logo to be?",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "What color would you like the shape to be? (Color Keyword or Hexadecimal only)",
  },
];

function writeFile(fName, data) {
  fs.writeFile(fName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("The file has been saved!");
  });
}

function init() {
  console.log("SVG Generator: Please answer the following questions");

  inquirer.prompt(questions).then((answer) => {
    writeFile("logo.svg", createCanvas(answer));
  });
}

init();
