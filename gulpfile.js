const gulp = require('gulp');
const Handlebars  = require('handlebars');
const handlebars = require('gulp-compile-handlebars');
const webserver = require('gulp-webserver');
const less = require('gulp-less');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const yaml = require('js-yaml');
const fs = require('fs');

// split multiline: https://stackoverflow.com/a/17975102
Handlebars.registerHelper('paragraphSplit', function(plaintext) {
    var i, output = '',
        lines = plaintext.split(/\r\n|\r|\n/g);
    for (i = 0; i < lines.length; i++) {
        if(lines[i]) {
            output += '<p>' + lines[i] + '</p>';
        }
    }
    return new Handlebars.SafeString(output);
});

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
  const yamlData = fs.readFileSync('src/data/data.yaml', 'utf8');
  const templateData = yaml.load(yamlData);


  return gulp.src('src/index.hbs')
    .pipe(handlebars(templateData, {}))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('target'));
})

gulp.task('compile', gulp.series('less', 'copy-lib', 'copy', 'template', 'uglify'));

gulp.task('watch', gulp.series('compile'), function() {
  gulp.watch(['src/*', 'src/img/**', 'src/lib/**'], gulp.series('copy'));
  gulp.watch(['src/**/*.hbs', 'src/data/**'], gulp.series('template'));
  gulp.watch('src/lib/**', gulp.series('copy-lib'));
  gulp.watch('src/less/**', gulp.series('less'));
  gulp.watch('src/js/**', gulp.series('uglify'));
});

gulp.task('default', gulp.series('watch', 'webserver'));
