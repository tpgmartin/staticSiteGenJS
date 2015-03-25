var gulp    = require('gulp'),
    connect = require('gulp-connect-multi')(),
    args    = require('yargs').argv;

 if (args.watch || args.w) {
   console.log('Livereload enabled');
 }

 gulp.task('connect', connect.server({
   root: ['_site'],
   port: 8000,
   livereload: !!(args.watch || args.w)
 }));