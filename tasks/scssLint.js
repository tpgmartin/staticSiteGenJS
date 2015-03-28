var gulp     = require('gulp'),
    scsslint = require('gulp-scss-lint');

gulp.task('scssLint', function() {
  return gulp.src('./assets/css/*.scss')
    .pipe(scsslint());
});