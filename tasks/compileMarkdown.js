var gulp = require('gulp'),
    rename = require("gulp-rename"),
    markdown = require('gulp-markdown');

gulp.task('compileMarkdown', function () {
  return gulp.src('./_posts/*.md')
    .pipe(rename(function (path) {
      // remove date, trailing hyphen
      path.dirname = path.basename.slice(11);
      path.basename = 'index'
    }))
    .pipe(markdown())
    .pipe(gulp.dest('./_site'));
});