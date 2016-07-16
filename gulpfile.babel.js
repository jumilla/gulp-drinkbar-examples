
import drinkbar from 'gulp-drinkbar'
import chalk from 'chalk'
import testSubdir from './assets/test-subdir/gulpfile'



drinkbar
	.task('test:clean')
	.clean('results/**/*')

drinkbar
	.task('test:1:1_copy')
	.copy({
		inputs: [
			'assets/test-1/*',
		],
		output: 'results/test-1',
	})

drinkbar
	.task('test:2:1_pug')
	.pug({
		inputs: [
			'assets/test-2/a.jade',
			'assets/test-2/b.pug',
		],
		output: 'results/test-2',
	})

drinkbar
	.task('test:3:1_stylus')
	.stylus({
		inputs: [
			'assets/test-3/a.styl',
			'assets/test-3/b.styl',
		],
		output: 'results/test-3',
	})

drinkbar
	.task('test:3:2_stylus_nib')
	.stylus({
		inputs: [
			'assets/test-3/c.styl',
		],
		output: 'results/test-3',
		config: {
			nib: true,
		},
	})

drinkbar
	.task('test:4:1_sass')
	.sass({
		inputs: [
			'assets/test-4/a.scss',
			'assets/test-4/b.scss',
		],
		output: 'results/test-4',
	})

drinkbar
	.task('test:4:2_sass_autoprefixer')
	.sass({
		inputs: [
			'assets/test-4/c.scss',
		],
		output: 'results/test-4',
		config: {
			autoprefixer: {
				browsers: ['last 20 versions'],
				cascade: false,
			},
		},
	})

drinkbar
	.task('test:5:1_less')
	.less({
		inputs: [
			'assets/test-5/a.less',
			'assets/test-5/b.less',
		],
		output: 'results/test-5',
	})

drinkbar
	.task('test:6:1_babel_es2015')
	.babel({
		inputs: [
			'assets/test-6/a.es6',
		],
		output: 'results/test-6',
//		config: {
//			presets: ['es2015'],
//		},
	})

drinkbar
	.task('test:6:2_babel_react')
	.babel({
		inputs: [
			'assets/test-6/b.jsx',
		],
		output: 'results/test-6',
		config: {
			presets: ['react'],
		},
	})

drinkbar
	.task('test:6:3_babel_react_es2015')
	.babel({
		inputs: [
			'assets/test-6/c.jsx',
		],
		output: 'results/test-6',
		config: {
			presets: ['react', 'es2015'],
		},
	})

drinkbar
	.task('test:7:1_coffeescript')
	.coffeescript({
		inputs: [
			'assets/test-7/a.coffee',
			'assets/test-7/b.coffee',
		],
		output: 'results/test-7',
	})

drinkbar
	.task('test:8:1_typescript')
	.typescript({
		inputs: [
			'assets/test-8/a.ts',
			'assets/test-8/b.ts',
		],
		output: 'results/test-8',
	})

drinkbar
	.task('test:9:1_riot')
	.riot({
		inputs: [
			'assets/test-9/a.tag',
			'assets/test-9/b.tag',
		],
		output: 'results/test-9',
	})

drinkbar
	.task('test:10:1_json5')
	.json5({
		input: 'assets/test-10/config.json5',
		output: 'results/test-10',
	})

drinkbar
	.task('test:11:1_cson')
	.cson({
		input: 'assets/test-11/config.cson',
		output: 'results/test-11',
	})

drinkbar
	.task('test:12:1_yaml')
	.yaml({
		input: 'assets/test-12/config.yaml',
		output: 'results/test-12',
	})

drinkbar
	.task('test:13:1_styles_provide_path')
	.styles({
		inputs: [
			'assets/test-13/a.css',
			'assets/test-13/b.css',
		],
		output: 'results/test-13-1.css',
	})

drinkbar
	.task('test:13:2_styles_provide_glob')
	.styles({
		inputs: [
			'assets/test-13/*.css',
		],
		output: 'results/test-13-2.css',
	})

drinkbar
	.task('test:13:3_styles_input_file_not_found')
	.styles({
		inputs: [
			'assets/test-13/notfound',
		],
		output: 'results/test-13-3.css',
	})

drinkbar
	.task('test:13:4_styles_autoprefixir')
	.styles({
		inputs: [
			'assets/test-13/c.css',
		],
		output: 'results/test-13-4.css',
		config: {
			autoprefixer: {
				browsers: 'last 20 versions',
			},
		},
	})

drinkbar
	.task('test:14:1_scripts_provide_path')
	.scripts({
		inputs: [
			'assets/test-14/a.js',
			'assets/test-14/b.js',
		],
		output: 'results/test-14-1.js',
	})

drinkbar
	.task('test:14:2_scripts_provide_glob')
	.scripts({
		inputs: [
			'assets/test-14/*.js',
		],
		output: 'results/test-14-2.js',
	})

drinkbar
	.task('test:14:3_scripts_input_file_not_found')
	.scripts({
		inputs: [
			'assets/test-14/notfound',
		],
		output: 'results/test-14-3.js',
	})

drinkbar
	.task('test:15:1_browserify_provide_path')
	.browserify({
		inputs: [
			'assets/test-15/a.js',
			'assets/test-15/b.js',
		],
		output: 'results/test-15-1.js',
		config: {},
	})

drinkbar
	.task('test:15:2_browserify_react')
	.browserify({
		inputs: [
			'assets/test-15/c.jsx',
		],
		output: 'results/test-15-2.js',
		config: {
			babelify: { presets: ['es2015', 'react'] },
		},
	})

drinkbar
	.task('test:16:1_webpack_provide_path')
	.webpack({
		inputs: [
			'assets/test-16/a.js',
			'assets/test-16/b.js',
		],
		output: 'results/test-16-1.js',
		config: {},
	})

drinkbar
	.task('test:16:2_webpack_react')
	.webpack({
		inputs: [
			'assets/test-16/c.jsx',
		],
		output: 'results/test-16-2.js',
		config: {},
	})

drinkbar
	.task('test:17:1_rollup_es5')
	.rollup({
		input: 'assets/test-17/es5.js',
		output: 'results/test-17-1.js',
		config: {},
	})

drinkbar
	.task('test:17:2_rollup_es6')
	.rollup({
		input: 'assets/test-17/es6.js',
		output: 'results/test-17-2.js',
		config: {},
	})

/*
drinkbar
	.task('test:17-3:rollup_react')
	.rollup({
		input: 'assets/test-17/react.js',
		output: 'results/test-17-3.js',
		config: {
			plugins: [nodeResolve({jsnext: true}, commonjs(), babel())],
		},
	})
*/



drinkbar.taskGroups()



drinkbar
	.task('clean', ['test:clean'])
	.define()



drinkbar
	.task('build', [
		'clean',
		'test',
	])
	.define()
	.on('after', function () {
		drinkbar.notify('Test finished!!', 'gulp-drinkbar')
		drinkbar.log('Test finished')
	})



drinkbar
	.task('serve')
	.browsersync({
		config: {
			server: 'public',
		},
		watch: 'public/**/*',
	})



drinkbar
	.task('default')
	.define(() => {
		drinkbar.log(chalk.black.bgGreen('Please run `gulp build` or `gulp serve`.'))
	})
