var gulp   = require('gulp'),
    prompt = require('gulp-prompt'),
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
      var date = new Date();
      var year = date.getFullYear();
      var month = '0' + String(date.getMonth()+1);
      var day = '0' + date.getDate();
      var title = path.title.replace(' ', '-');
      var filename = [year, month.slice(-2), day.slice(-2), title].join('-');
      filename = './_posts/' + filename + '.md';
      fs.writeFile(filename , 'Some markup', function (err) {
        if (err) throw err;
      });
    }))
});