
import drinkbar from 'gulp-drinkbar'
import chalk from 'chalk'



drinkbar
	.task('test:clean')
	.clean('results/**/*')

drinkbar
	.task('test:1-1:copy')
	.copy({
		inputs: [
			'assets/test-1/*',
		],
		output: 'results/test-1',
	})

drinkbar
	.task('test:2-1:pug')
	.pug({
		inputs: [
			'assets/test-2/a.jade',
			'assets/test-2/b.pug',
		],
		output: 'results/test-2',
	})

drinkbar
	.task('test:3-1:stylus')
	.stylus({
		inputs: [
			'assets/test-3/a.styl',
			'assets/test-3/b.styl',
		],
		output: 'results/test-3',
	})

drinkbar
	.task('test:3-2:stylus_nib')
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
	.task('test:4-1:sass')
	.sass({
		inputs: [
			'assets/test-4/a.scss',
			'assets/test-4/b.scss',
		],
		output: 'results/test-4',
	})

drinkbar
	.task('test:4-2:sass_autoprefixer')
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
	.task('test:5-1:less')
	.less({
		inputs: [
			'assets/test-5/a.less',
			'assets/test-5/b.less',
		],
		output: 'results/test-5',
	})

drinkbar
	.task('test:6-1:babel_es2015')
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
	.task('test:6-2:babel_react')
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
	.task('test:6-3:babel_react_es2015')
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
	.task('test:7-1:coffeescript')
	.coffeescript({
		inputs: [
			'assets/test-7/a.coffee',
			'assets/test-7/b.coffee',
		],
		output: 'results/test-7',
	})

drinkbar
	.task('test:8-1:typescript')
	.typescript({
		inputs: [
			'assets/test-8/a.ts',
			'assets/test-8/b.ts',
		],
		output: 'results/test-8',
	})

drinkbar
	.task('test:9-1:riot')
	.riot({
		inputs: [
			'assets/test-9/a.tag',
			'assets/test-9/b.tag',
		],
		output: 'results/test-9',
	})

drinkbar
	.task('test:10-1:styles_provide_path')
	.styles({
		inputs: [
			'assets/test-10/a.css',
			'assets/test-10/b.css',
		],
		output: 'results/test-10-1.css',
	})

drinkbar
	.task('test:10-2:styles_provide_glob')
	.styles({
		inputs: [
			'assets/test-10/*.css',
		],
		output: 'results/test-10-2.css',
	})

drinkbar
	.task('test:10-3:styles_input_file_not_found')
	.styles({
		inputs: [
			'assets/test-10/notfound',
		],
		output: 'results/test-10-3.css',
	})

drinkbar
	.task('test:10-4:styles_autoprefixir')
	.styles({
		inputs: [
			'assets/test-10/c.css',
		],
		output: 'results/test-10-4.css',
		config: {
			autoprefixer: {
				browsers: 'last 20 versions',
			},
		},
	})

drinkbar
	.task('test:11-1:scripts_provide_path')
	.scripts({
		inputs: [
			'assets/test-11/a.js',
			'assets/test-11/b.js',
		],
		output: 'results/test-11-1.js',
	})

drinkbar
	.task('test:11-2:scripts_provide_glob')
	.scripts({
		inputs: [
			'assets/test-11/*.js',
		],
		output: 'results/test-11-2.js',
	})

drinkbar
	.task('test:11-3:scripts_input_file_not_found')
	.scripts({
		inputs: [
			'assets/test-11/notfound',
		],
		output: 'results/test-11-3.js',
	})

drinkbar
	.task('test:12-1:browserify_provide_path')
	.browserify({
		inputs: [
			'assets/test-12/a.js',
			'assets/test-12/b.js',
		],
		output: 'results/test-12-1.js',
	})

drinkbar
	.task('test:12-2:browserify_react')
	.browserify({
		inputs: [
			'assets/test-12/c.jsx',
		],
		output: 'results/test-12-2.js',
		config: {
			babelify: { presets: ['es2015', 'react'] },
		},
	})

drinkbar
	.task('test:13-1:webpack_provide_path')
	.webpack({
		inputs: [
			'assets/test-13/a.js',
			'assets/test-13/b.js',
		],
		output: 'results/test-13-1.js',
	})

drinkbar
	.task('test:13-2:webpack_react')
	.webpack({
		inputs: [
			'assets/test-13/c.jsx',
		],
		output: 'results/test-13-2.js',
		config: {
			module: {
				loaders: [
					{
						test: /\.jsx$/,
						loader: 'babel-loader',
						query: {
							presets: ['es2015', 'react'],
						},
					}
				],
			},
		},
	})

drinkbar
	.task('test:14-1:json5')
	.json5({
		input: 'assets/test-14/config.json5',
		output: 'results/test-14',
	})

drinkbar
	.task('test:15-1:cson')
	.cson({
		input: 'assets/test-15/config.cson',
		output: 'results/test-15',
	})

drinkbar
	.task('test:16-1:yaml')
	.yaml({
		input: 'assets/test-16/config.yaml',
		output: 'results/test-16',
	})

drinkbar
	.task('clean', ['test:clean'])
	.define()



drinkbar
	.task('build', [
		'clean',
		'test:1-1:copy',
		'test:2-1:pug',
		'test:3-1:stylus',
		'test:3-2:stylus_nib',
		'test:4-1:sass',
		'test:4-2:sass_autoprefixer',
		'test:5-1:less',
		'test:6-1:babel_es2015',
		'test:6-2:babel_react',
		'test:6-3:babel_react_es2015',
		'test:7-1:coffeescript',
		'test:8-1:typescript',
		'test:9-1:riot',
		'test:10-1:styles_provide_path',
		'test:10-2:styles_provide_glob',
		'test:10-3:styles_input_file_not_found',
		'test:10-4:styles_autoprefixir',
		'test:11-1:scripts_provide_path',
		'test:11-2:scripts_provide_glob',
		'test:11-3:scripts_input_file_not_found',
		'test:12-1:browserify_provide_path',
		'test:12-2:browserify_react',
		'test:13-1:webpack_provide_path',
		'test:13-2:webpack_react',
		'test:14-1:json5',
		'test:15-1:cson',
		'test:16-1:yaml',
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
