console.log("Script Loaded!");

const sayHello = (name) => {
    return `Hello ${name}`;
}

const increase = (num1) => {
    return num1 + 1;
}

const increaseBy5 = (num1) => {
    return num1 + 5;
}

const multiplyBy100 = (num1) => {
    return num1 * 100;
}


const sum = (num1, num2) => {
    return num1 + num2;
}

const average = (num1, num2) => {
    return (num1 + num2) / 2;
}

const triPerimeter = (a, b, c) => {
    return a + b + c;
}

const slope = (x1, y1, x2, y2) => {
    return (y2 - y1) / (x2 - x1);
}

const dice = () => {
    return Math.floor(Math.random()*6) + 1;
}


