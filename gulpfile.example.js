const gulp = require('gulp')
const sass = require('gulp-sass')
const gcmq = require('gulp-group-css-media-queries')
const stripCssComments = require('gulp-strip-css-comments')
const cssnano = require('gulp-cssnano')

gulp.task('css', function () {
    return gulp.src('example.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(''))
})


gulp.task('prod', function () {
    return gulp.src('example.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gcmq())
    .pipe(stripCssComments())
    .pipe(cssnano())
    .pipe(gulp.dest(''))
})

