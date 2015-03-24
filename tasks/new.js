var gulp   = require('gulp'),
    prompt = require('gulp-prompt'),
    rename = require('gulp-rename'),
    file   = require('gulp-file'),
    shell  = require('gulp-shell'),
    fs = require('fs');

// Tasks:
// * Prompt user to enter title
// * Automatically generate datetime
// * Create file name by concatenating title and datetime
// * Output to _posts/

gulp.task('new', function () {
  return gulp.src('./_posts').pipe(prompt.prompt({
        type: 'input',
        name: 'title',
        message: 'Post title'
    }, function(path){
      var filename = './_posts/git' + path.title + '.md'
      fs.writeFile(filename , 'Some markup', function (err) {
        if (err) throw err;
      });
    }))
});