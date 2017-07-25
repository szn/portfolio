var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src('scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded',
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});

gulp.task('prod', function(){
    return gulp.src('scss/style.scss')
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded',
        }))
   	  .pipe(cssmin())
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['sass']);
});
