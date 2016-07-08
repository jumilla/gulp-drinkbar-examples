
var drinkbar = require('gulp-drinkbar')

drinkbar
	.task('test:clean')
	.erase('results/**/*')

drinkbar
	.task('test:1-1:styles_provide_path')
	.styles({
		inputs: [
			'assets/test-1/a.css',
			'assets/test-1/b.css',
		],
		output: 'results/test-1-1.css',
	})

drinkbar
	.task('test:1-2:styles_provide_glob')
	.styles({
		inputs: [
			'assets/test-1/*.css',
		],
		output: 'results/test-1-2.css',
	})

drinkbar
	.task('test:1-3:styles_input_file_not_found')
	.styles({
		inputs: [
			'path/to/notfound',
		],
		output: 'results/test-1-3.css',
	})

drinkbar
	.task('test:2-1:scripts_provide_path')
	.scripts({
		inputs: [
			'assets/test-2/a.js',
			'assets/test-2/b.js',
		],
		output: 'results/test-2-1.js',
	})

drinkbar
	.task('test:2-2:scripts_provide_glob')
	.scripts({
		inputs: [
			'assets/test-2/*.js',
		],
		output: 'results/test-2-2.js',
	})

drinkbar
	.task('test:2-3:scripts_input_file_not_found')
	.scripts({
		inputs: [
			'path/to/notfound',
		],
		output: 'results/test-2-3.js',
	})

drinkbar
	.task('test:3-1:browserify_provide_path')
	.browserify({
		inputs: [
			'assets/test-3/a.js',
			'assets/test-3/b.js',
		],
		output: 'results/test-3-1.js',
	})

drinkbar
	.task('test:4-1:pug')
	.pug({
		inputs: [
			'assets/test-4/a.jade',
			'assets/test-4/b.jade',
		],
		output: 'results/test-4',
	})

drinkbar
	.task('test:5-1:stylus_provide_path')
	.stylus({
		inputs: [
			'assets/test-5/a.styl',
			'assets/test-5/b.styl',
		],
		output: 'results/test-5',
	})

drinkbar
	.task('test:6-1:sass')
	.sass({
		inputs: [
			'assets/test-6/a.less',
			'assets/test-6/b.less',
		],
		output: 'results/test-6',
	})

drinkbar
	.task('test:7-1:less')
	.less({
		inputs: [
			'assets/test-7/a.scss',
			'assets/test-7/b.scss',
		],
		output: 'results/test-7',
	})

drinkbar
	.task('test:8-1:coffeescript')
	.coffeescript({
		inputs: [
			'assets/test-8/a.coffee',
			'assets/test-8/b.coffee',
		],
		output: 'results/test-8',
	})

drinkbar
	.task('test:9-1:typescript')
	.typescript({
		inputs: [
			'assets/test-9/a.ts',
			'assets/test-9/b.ts',
		],
		output: 'results/test-9',
	})

drinkbar
	.task('test:10-1:riot')
	.riot({
		inputs: [
			'assets/test-10/a.tag',
			'assets/test-10/b.tag',
		],
		output: 'results/test-10',
	})

drinkbar
	.task('clean', ['test:clean'])
	.define()

drinkbar
	.task('default', [
		'clean',
		'test:1-1:styles_provide_path',
		'test:1-2:styles_provide_glob',
		'test:1-3:styles_input_file_not_found',
		'test:2-1:scripts_provide_path',
		'test:2-2:scripts_provide_glob',
		'test:2-3:scripts_input_file_not_found',
		'test:3-1:browserify_provide_path',
		'test:4-1:pug',
		'test:5-1:stylus_provide_path',
		'test:6-1:sass',
		'test:7-1:less',
		'test:8-1:coffeescript',
		'test:9-1:typescript',
		'test:10-1:riot',
	])
	.define()
	.on('after', function () {
		drinkbar.notify('Test finished!!', 'gulp-drinkbar')
		drinkbar.log('Test finished')
	})
