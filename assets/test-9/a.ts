
class GreeterA {
	constructor(public greeting: string) {
	}

	greet() {
		return '<h1>' + this.greeting + '</h1>'
	}
}

let greeterA = new GreeterA('Hello, world A!')
