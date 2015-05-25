var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');

gulp.task('sass', function(){
gulp.src('./scss/{,*/}*{scss,sass}')
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(sourcemaps.init())
	.pipe(autoprefixer())
	.pipe(sass({
		errLogToConsole: true
	}))
	.pipe(sourcemaps.write())
	.pipe(notify("compiled successful"))
	.pipe(gulp.dest('./css'));
})

gulp.task('default', ['sass'], function(){
	gulp.watch('./scss/{,*/}*.{scss,sass}', ['sass'])
});