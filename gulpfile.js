const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const insert = require('gulp-insert');
const rename = require('gulp-rename');

gulp.task('build-css', function () {
  return gulp
    .src('src/index.css')
    .pipe(sourcemaps.init())
    .pipe(postcss()) 
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('add-comments', function () {
  return gulp
    .src('dist/index.css') 
    .pipe(insert.prepend("/*\n * @name discord\n * @author iwindd\n * @description -\n * @version 0.0.1\n*/\n\n"))
    .pipe(rename('discord.theme.css'))
    .pipe(gulp.dest('../'));
});

gulp.task('dev', function () {
  gulp.watch('src/index.css', gulp.series('build-css', 'add-comments'));
});

gulp.task('build', gulp.series('build-css', 'add-comments'));
