var drinkbar = require('gulp-drinkbar')

drinkbar

	.task('style:app')
	.styles({
		inputs: [
			'resources/css/style.css',
			'resources/css/baseStyle.css',
		],
		output: 'public/baseStyle.css',
	})
	.watch('resources/css/**/*.css')

drinkbar
	.task('styles', ['style:app'])
	.define()

drinkbar
	.task('default', ['styles'])
	.define()