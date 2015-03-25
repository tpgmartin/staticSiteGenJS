var gulp      = require('gulp'),
    concat    = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css');
 
gulp.task('compileCSS', function() {
  return gulp.src('./assets/css/*.css')
    .pipe(concat('all.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./_site/assets/css'));
});