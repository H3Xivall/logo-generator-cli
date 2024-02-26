class Shapes {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  drawCanvas() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "200");
    svg.setAttribute("height", "200");
    svg.innerHTML = "";
  }
}

// Path: circle.js
class Circle extends Shapes {
  constructor(text, color) {
    super(text, color);
  }
  render() {
    console.log(`Drawing a ${this.color} circle`);

    super.drawCanvas();

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    circle.setAttribute("cx", "100");
    circle.setAttribute("cy", "100");
    circle.setAttribute("r", "50");
    circle.setAttribute("fill", this.color);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.textContent = this.text;
    text.setAttribute("x", "100");
    text.setAttribute("y", "100");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("fill", "white");

    drawCanvas.appendChild(circle);
    drawCanvas.appendChild(text);
  }
}

class Square extends Shapes {
  constructor(text, color) {
    super(text, color);
  }
  render() {
    console.log(`Drawing a ${this.color} square`);

    super.drawCanvas();

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", "100");
    rect.setAttribute("y", "100");
    rect.setAttribute("width", "100");
    rect.setAttribute("height", "100");
    rect.setAttribute("fill", this.color);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.textContent = this.text;
    text.setAttribute("x", "100");
    text.setAttribute("y", "100");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("fill", "white");

    drawCanvas.appendChild(rect);
    drawCanvas.appendChild(text);
  }
}

class Triangle extends Shapes {
  constructor(text, color) {
    super(text, color);
  }
  render() {
    console.log(`Drawing a ${this.color} triangle`);

    super.drawCanvas();

    const polygon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon",
    );
    polygon.setAttribute("points", "100,50 150,150 50,150");
    polygon.setAttribute("fill", this.color);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.textContent = this.text;
    text.setAttribute("x", "100");
    text.setAttribute("y", "100");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("fill", "white");

    drawCanvas.appendChild(polygon);
    drawCanvas.appendChild(text);
  }
}

export default { Circle, Square, Triangle };