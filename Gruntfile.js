module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          "public/javascripts/vendor/all.js": [ "public/javascripts/vendor/all.js" ]
        }
      }
    },
    bower_concat: {
      all: {
        dest: "public/javascripts/vendor/all.js",
        dependencies: {
          "underscore": "jquery",     //  underscore requires jquery
          "backbone": "underscore"    //  backbone requires underscore
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-bower-concat");

  grunt.registerTask("default", ["bower_concat", "uglify"]);
};
