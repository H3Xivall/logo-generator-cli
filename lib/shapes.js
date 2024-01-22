class Circle {
    constructor(txt, color) {
        this.txt = txt;
        this.color = color;
    }
    radius = 80;
    render() {
        return `<circle cx="150" cy="100" r="80" fill=${this.color}/>`;
    }
};

class Square {
    constructor(txt, color) {
        this.txt = txt;
        this.color = color;
    }
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill=${this.color}/>`;
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