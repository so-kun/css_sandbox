var gulp = require('gulp');

var compass = require('gulp-compass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

// compass
gulp.task('compass', function() {
  gulp.src('sass/**/*.scss').pipe(compass({
    config_file: 'config.rb',
    css: 'css/',
    sass: 'sass/'
  }));
});


// css-min
gulp.task('cssmin', function() {
  gulp.src('css/*.css')
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('cssmin'));
});



/**
 * watch
 * watchでcompassを自動で書きだす
 */
// Watch
gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', function(event) {
    gulp.run('compass');
  });

//gulp.watch('css/**/*.css', function(event) {
//    gulp.run('cssmin');
//  });
});

gulp.task('default', function() {
  gulp.run('watch');
});
