var GreeterA = (function () {
    function GreeterA(greeting) {
        this.greeting = greeting;
    }
    GreeterA.prototype.greet = function () {
        return '<h1>' + this.greeting + '</h1>';
    };
    return GreeterA;
}());
var greeterA = new GreeterA('Hello, world A!');

//# sourceMappingURL=a.js.map
