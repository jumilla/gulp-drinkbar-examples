
class GreeterB {
	constructor(public greeting: string) {
	}

	greet() {
		return '<h1>' + this.greeting + '</h1>'
	}
}

let greeterB = new GreeterB('Hello, world B!')
