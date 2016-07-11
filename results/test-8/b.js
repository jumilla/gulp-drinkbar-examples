var GreeterB = (function () {
    function GreeterB(greeting) {
        this.greeting = greeting;
    }
    GreeterB.prototype.greet = function () {
        return '<h1>' + this.greeting + '</h1>';
    };
    return GreeterB;
}());
var greeterB = new GreeterB('Hello, world B!');

//# sourceMappingURL=b.js.map
