var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass',function(){
	gulp.src('./sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./css'))

});

gulp.task('sass:watch',function(){
	gulp.watch('.sass/*.scss',['sass']);
});