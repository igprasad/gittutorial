module.exports = function (grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch :{
			sass : {
				files : 'sass/custom.scss',
				tasks : ['sass']
			}
		},
		concat : {
			options : {
				separator : '\n\n'
			},
			dist : {
				src : ['js/Main.js','js/Controller.js'],
				dest : 'bin/ <%= pkg.name %>.js'
			}
		},
		uglify : {
			options :{
				mangle : false
			},
			build : {
				src :'bin/<%=pkg.name%>.js',
				dest : 'bin/js/<%=pkg.name%>.min.js'
			}
		},
		sass : {
			dist : {
				files :{
					'css/custom.css' : 'sass/custom.scss'
				}
			}
		}
		
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//tasks
	grunt.registerTask('server',['concat']);
	grunt.registerTask('default', ['concat']);
}