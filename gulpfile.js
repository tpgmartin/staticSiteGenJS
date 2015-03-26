var gulp       = require('gulp'),
    requireDir = require('require-dir'),
    dir        = requireDir('./tasks');

gulp.task('build', ['compileMarkdown', 'compileCSS', 'compileJS']);

gulp.task('serve', ['build', 'connect']);