var gulp = require('gulp');
var requireDir = require('require-dir');
var dir = requireDir('./tasks');

gulp.task('build', ['compileMarkdown', 'compileCSS', 'compileJS']);

gulp.task('serve', ['build', 'connect']);