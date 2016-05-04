var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var webserver = require('gulp-webserver');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var decache = require('decache');

gulp.task('webserver', function() {
  gulp.src(['target'])
    .pipe(webserver({
      livereload: true,
      port: 4000,
      host: '0.0.0.0'
    }));
});

gulp.task('less', function () {
  return gulp.src('src/less/**/*.less')
    .pipe(less({}))
    .pipe(gulp.dest('target/css'));
});

gulp.task('copy', function() {
  return gulp.src(['src/**/*', '!src/**/*.hbs', '!src/data{,/**}', '!src/lib{,/**}',
                   '!src/less{,/**}', '!src/js{,/**}'])
    .pipe(gulp.dest('./target'));
});

gulp.task('copy-lib', function() {
  return gulp.src(['src/lib/**'])
    .pipe(gulp.dest('./target'));
});

gulp.task('uglify', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('target/js'));
});

gulp.task('template', function() {
  decache('./src/data/data.js');
  var templateData = require('./src/data/data.js');

  gulp.src('src/index.hbs')
    .pipe(handlebars(templateData, {}))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('target'));
})

gulp.task('watch', ['compile'], function() {
  gulp.watch(['src/*', 'src/img/**', 'src/lib/**'], ['copy']);
  gulp.watch(['src/**/*.hbs', 'src/data/**'], ['template']);
  gulp.watch('src/lib/**', ['copy-lib']);
  gulp.watch('src/less/**', ['less']);
  gulp.watch('src/js/**', ['uglify']);
});

gulp.task('compile', ['less', 'copy-lib', 'copy', 'template', 'uglify']);

gulp.task('default', ['watch', 'webserver']);
