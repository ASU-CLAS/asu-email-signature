var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    copy   = require('gulp-copy'),
    concat = require('gulp-concat');

gulp.task('sass', function() {
  gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('asu-email-signature.css'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('build', function() {
  gulp.src('./src/**/!(*.scss)')
    .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['sass', 'build']);
