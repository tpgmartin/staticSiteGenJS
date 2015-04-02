var gulp        = require('gulp'),
    rename      = require('gulp-rename'),
    markdown    = require('gulp-marked'),
    concat       = require('gulp-concat');

gulp.task('concatPost', function () {
  // return gulp.src('./_posts/*.md')
  gulp.src(['./_includes/header.html', './_posts/2015-03-30-what-a-blog!.md', './_includes/footer.html'])
    .pipe(frontMatter({remove: true}))
    .pipe(markdown())
    .pipe(concat('post.html'))
    .pipe(gulp.dest('./_site'));
});