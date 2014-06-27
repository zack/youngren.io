module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      html: {
        files: 'src/html/*.html',
        tasks: 'copy:html'
      },
      coffee: {
        files: 'src/coffee/*.coffee',
        tasks: 'coffee'
      },
      less: {
        files: 'src/less/*.less',
        tasks: 'less'
      },
      images: {
        files: 'src/images/*',
        tasks: 'copy:images'
      },
      lib: {
        files: 'src/lib/**/*',
        tasks: 'copy'
      }
    },
    clean: ['public_html/*', 'public_html/**/*', '!public_html/.git'],
    coffee: {
      all: {
        expand: true,
        flatten: false,
        cwd: 'src/coffee',
        src: ['**/*.coffee'],
        dest: 'public_html/javascript',
        ext: '.js'
      }
    },
    less: {
      all: {
        expand: true,
        flatten: false,
        files: {
          "public_html/css/main.css": "src/less/main.less"
        }
      }
    },
    copy: {
      html: {
        expand: true,
        flatten: false,
        cwd: 'src/html',
        src: ['**/*.html'],
        dest: 'public_html'
      },
      images: {
        expand: true,
        flatten: false,
        cwd: 'src/images',
        src: ['**/*.png'],
        dest: 'public_html/images'
      },
      libjs: {
        expand: true,
        flatten: true,
        cwd: 'lib',
        src: ['**/handlebars.min.js',
              '**/jquery.min.js',
              '**/underscore.js',
              '**/c3.min.js',
              '**/d3.min.js'],
        dest: 'public_html/lib'
      },
      libcss: {
        expand: true,
        flatten: true,
        cwd: 'lib',
        src: ['**/c3.css'],
        dest: 'public_html/css'
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost',
          protocol: 'http',
          base: 'public_html',
          directory: 'public_html',
          livereload: 9000,
          open: true,
          keepalive: true
        }
      }
    }
  });

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['clean', 'coffee', 'less', 'copy']);
  grunt.registerTask('connect')

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
};
