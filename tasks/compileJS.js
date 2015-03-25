var gulp      = require('gulp'),
    concat    = require('gulp-concat'),
    uglify     = require('gulp-uglify');
 
gulp.task('compileJS', function() {
  return gulp.src('./assets/js/*.js')
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./_site/assets/js'));
});