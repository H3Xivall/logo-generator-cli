class Circle {
    constructor(txt, color) {
        this.txt = txt;
        this.color = color;
    }
    radius = 80;
    render() {
        return `<div class="circle" style="background-color:${this.color}; width:${this.radius}; height:${this.radius}>
            ${this.txt}
        </div>`;
    }
};

class Square {
    constructor(txt, color) {
        this.txt = txt;
        this.color = color;
    }
    side = 80;
    render() {
        return `<div class="square" style="background-color:${this.color}; width:${this.side}; height:${this.side}">
            ${this.txt}
        </div>`;
    }
};

class Triangle {
    constructor(txt, color) {
        this.txt = txt;
        this.color = color;
    }
    render() {
        return `<polygone points="150,18 244,182 56,182" fill=${this.color} />`
    }
};

export { Circle, Square, Triangle };