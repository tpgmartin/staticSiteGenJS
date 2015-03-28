var gulp     = require('gulp'),
    jshint   = require('gulp-jshint');

gulp.task('jsHint', function() {
  return gulp.src('./assets/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});