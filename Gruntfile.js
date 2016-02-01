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
        dest: 'assets/js/project-libs.js'
      },
      app: {
        src: [
          'app/routes.js',
          'app/helpers/**/*.js',
          'app/controllers/**/*.js'
        ],
        dest: 'assets/js/project-app.js'
      }
    },

    rowndCompile: {
      template: {
        src: 'app/views/**/*.handlebars',
        dest: 'assets/js/project-templates.js'
      }
    },

    copy: {
      index: {
        files: [{
          expand: true,
          cwd: 'app/',
          src: ['index.html'],
          dest: ''
        }]
      },
      ractiveMap: {
        files: [{
          expand: true,
          cwd: 'node_modules/ractive/',
          src: ['ractive.js.map'],
          dest: 'assets/js/'
        }]
      },
      customStyles: {
        files: [{
          expand: true,
          cwd: 'app/styles/',
          src: ['**.css'],
          dest: 'assets/css/'
        }]
      },
      libStyles: {
        files: [{
          expand: true,
          cwd: 'node_modules/todomvc-app-css/',
          src: ['index.css'],
          dest: 'assets/css/'
        }]
      },
      images: {
        files: [{
          expand: true,
          cwd: 'app/images',
          src: ['**/*'],
          dest: 'assets/images/'
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
          'assets/js/project-libs.js' : 'assets/js/project-libs.js'
        }
      },
      app: {
        files: {
          'assets/js/project-app.js' : 'assets/js/project-app.js'
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
        tasks: ['rowndCompile']
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
    'rowndCompile',
    'copy',
    'watch']
  );

};
