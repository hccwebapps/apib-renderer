var gulp = require('gulp'),
    aglio = require('gulp-aglio'),
    changed = require('gulp-changed'),
    path = require('path');

var tinylr;
var tinylr_port = 35729,
    app_port = 4000,
    root_cwd = process.cwd(),
    output_dir = path.join(root_cwd,'docs');

gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(tinylr_port);
});

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: tinylr_port}));
  app.use(express.static(output_dir));
  app.listen(app_port, '0.0.0.0');
});

gulp.task('apib', function() {
  return gulp.src('apib/**/*.apib')
    .pipe(aglio({tempalte: 'default'}))
    .pipe(changed('docs'))
    .pipe(gulp.dest('docs'));
});

gulp.task('watch', function() {
  gulp.watch('apib/**/*.apib', ['apib']);
  gulp.watch('docs/**/*.html', notifyLiveReload);
});

gulp.task('serve', ['express', 'livereload'], function(){});

gulp.task('default', ['apib', 'serve', 'watch'], function() {});


function notifyLiveReload(event) {
  var file_name = require('path').relative(__dirname, event.path);
  var normpath = path.normalize(file_name);
  var relpath = path.join(root_cwd, normpath);

  console.log('* Reloading:', relpath);
  tinylr.changed({
    body: {
      files: [file_name]
    }
  });
}

module.exports = gulp;
