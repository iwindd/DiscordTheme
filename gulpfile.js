const gulp = require('gulp');
const insert = require('gulp-insert');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const package = require('./package.json');

gulp.task('build', () => {
  return gulp
    .src('src/index.css')
    .pipe(postcss())
    .pipe(insert.prepend(`/**
    * @name ${package.title}
    * @author ${package.author}
    * @description ${package.description}
    * @version ${package.version}
    */ \n\n\n`))
    .pipe(rename(`${package.name}.theme.css`))
    .pipe(gulp.dest(package.path));
});

gulp.task('dev', () => {
  gulp.watch('src/**/*.css', gulp.series('build'));
});