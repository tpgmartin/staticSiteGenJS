var gulp        = require('gulp'),
    rename      = require('gulp-rename'),
    frontMatter = require('gulp-front-matter'),
    markdown    = require('gulp-marked');

gulp.task('compileMarkdown', function () {
  return gulp.src('./_posts/*.md')
    .pipe(rename(function (path) {
      // remove date, trailing hyphen
      path.dirname = path.basename.slice(11);
      path.basename = 'index'
    }))
    .pipe(frontMatter({
      property: 'frontMatter',
      remove: true
    }))
    .pipe(markdown())
    .pipe(gulp.dest('./_site'));
});