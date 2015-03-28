var gulp = require('gulp'),
    sass = require('gulp-sass');
 
gulp.task('CompileSass', function () {
    gulp.src('./assets/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/css'));
});