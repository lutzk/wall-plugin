var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('watch', function () {
  gulp.watch('./src/scss/*.scss', ['scss']);
});

gulp.task('scss', function () {
  gulp.src([
    './src/scss/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 6 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(concat('./styles.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['scss']);
