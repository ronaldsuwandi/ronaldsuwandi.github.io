var gulp = require('gulp');
var webserver = require('gulp-webserver');
var less = require('gulp-less');
var uglify = require('gulp-uglify');

gulp.task('webserver', function() {
  gulp.src(['target'])
    .pipe(webserver({
      livereload: true,
      port: 4000,
    }));
});

gulp.task('less', function () {
  return gulp.src('src/less/**/*.less')
    .pipe(less({
    }))
    .pipe(gulp.dest('target/css'));
});

gulp.task('copy', function() {
  return gulp.src(['src/**/*', '!src/lib{,/**}', '!src/less{,/**}', '!src/js{,/**}'])
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

gulp.task('watch', ['compile'], function() {
  gulp.watch(['src/*', 'src/img/**', 'src/lib/**'], ['copy']);
  gulp.watch('src/lib/**', ['copy-lib'])
  gulp.watch('src/less/**', ['less']);
  gulp.watch('src/js/**', ['uglify']);
});

gulp.task('compile', ['less', 'copy-lib', 'copy', 'uglify']);

gulp.task('default', ['watch', 'webserver']);
