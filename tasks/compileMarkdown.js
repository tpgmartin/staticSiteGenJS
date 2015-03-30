var gulp        = require('gulp'),
    rename      = require('gulp-rename'),
    data        = require('gulp-data'),
    pluck       = require('gulp-pluck'),
    frontMatter = require('gulp-front-matter');

gulp.task('markdown', function () {
  return gulp.src('./_posts/*.md')
    .pipe(rename(function (path) {
      // remove date, trailing hyphen
      path.dirname = path.basename.slice(11);
      path.basename = 'index'
    }))
    .pipe(markdown())
    .pipe(gulp.dest('./_site'));
});

gulp.task('frontMatterToJSON', function () {
  return gulp.src('./_posts/*.md')
    .pipe(frontMatter({property: 'meta'}))
    .pipe(data(function (file) {
      file.meta.path = file.path;
    }))
    .pipe(pluck('meta', '_frontMatter.json'))
    .pipe(data(function (file) {
      file.contents = new Buffer(JSON.stringify(file.meta))
    }))
    .pipe(gulp.dest('./'));
});