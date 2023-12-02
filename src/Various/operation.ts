export default class Operation {
    a: number;
    b: number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }
    sum() {
        return this.a + this.b;
    }
    substract() {
        return this.a - this.b;
    }
    multiply() {
        return this.a * this.b;
    }
    divide() {
        return this.a / this.b;
    }
}