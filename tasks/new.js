var gulp   = require('gulp'),
    prompt = require('gulp-prompt'),
    fs = require('fs');

// #TODO:
// * Generate post markup e.g. tags, permalink
// * Polish task.js

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
      var title = path.title;
      var permanlink = title.replace(/ /g,'-');
      var filename = [year, month.slice(-2), day.slice(-2), permanlink].join('-');
      filename = './_posts/' + filename + '.md';
      fs.writeFile(filename , '---\nlayout:\ntitle: '+title+'\ncategories:\ntags:\npermalink: '+permanlink+'\n---', function (err) {
        if (err) throw err;
      });
    }))
});