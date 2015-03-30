var gulp       = require('gulp'),
    requireDir = require('require-dir'),
    dir        = requireDir('./tasks');

gulp.task('compileMarkdown', ['markdown', 'frontMatterToJSON']);

gulp.task('sass', ['scssLint', 'compileSass']);

gulp.task('build', ['copy', 'compileMarkdown', 'compileCSS', 'compileJS']);

gulp.task('serve', ['build', 'connect']);