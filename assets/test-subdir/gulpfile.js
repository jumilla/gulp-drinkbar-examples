
import drinkbar from 'gulp-drinkbar'

drinkbar
	.task('test:subdir-1:directory_method_and_root_path')
	.directory(__dirname)
	.scripts({
		inputs: [
			'a.js',
			'b.js',
		],
		output: 'root:results/test-subdir/ab.js',
	})
