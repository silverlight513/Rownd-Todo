/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> */',

    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      jsLibs: {
        src:
          [
            'node_modules/rownd/dist/rownd.js'
            // Add js libs here
          ],
        dest: 'dist/assets/js/project-libs.js'
      },
      app: {
        src: [
          'app/routes.js',
          'app/helpers/**/*.js',
          'app/controllers/**/*.js'
        ],
        dest: 'dist/assets/js/project-app.js'
      }
    },

    rownd_compile: {
      template: {
        src: 'app/views/**/*.handlebars',
        dest: 'dist/assets/js/project-templates.js'
      }
    },

    copy: {
      index: {
        files: [{
          expand: true,
          cwd: 'app/',
          src: ['index.html'],
          dest: 'dist/'
        }]
      },
      ractiveMap: {
        files: [{
          expand: true,
          cwd: 'node_modules/ractive/',
          src: ['ractive.js.map'],
          dest: 'dist/assets/js/'
        }]
      },
      styles: {
        files: [{
          expand: true,
          cwd: 'app/styles/',
          src: ['**.css'],
          dest: 'dist/assets/css/'
        }]
      },
      images: {
        files: [{
          expand: true,
          cwd: 'app/images',
          src: ['**/*'],
          dest: 'dist/assets/images/'
        }]
      }
    },

    jshint: {
      options : {
        jshintrc : '.jshintrc'
      },
      beforeconcat: [
        'app/routes.js',
        'app/helpers/**/*.js',
        'app/controllers/**/*.js'
      ]
    },

    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      libs: {
        files: {
          'dist/assets/js/project-libs.js' : 'dist/assets/js/project-libs.js'
        }
      },
      app: {
        files: {
          'dist/assets/js/project-app.js' : 'dist/assets/js/project-app.js'
        }
      }
    },

    watch: {
      index: {
        files: ['app/{,*/}*.html'],
        tasks: ['copy:index']
      },
      app: {
        files: ['app/**/*.js'],
        tasks: ['concat:app', 'jshint']
      },
      templates: {
        files: ['app/views/**/*.handlebars'],
        tasks: ['rownd_compile']
      }
    }

  });



  // Load all of Grunt's dependencies
  require('matchdep')
    .filterDev('grunt-*')
    .forEach(grunt.loadNpmTasks);

  grunt.loadNpmTasks('rownd-ractive-compiler');

  grunt.registerTask('default', [
    'concat',
    'jshint',
    'uglify',
    'rownd_compile',
    'copy']
  );

};
