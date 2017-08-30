var gulp = require('gulp'),
	//编译less文件
	less = require('gulp-less'),
	//发生异常时提示错误
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),
	//引入关系混乱时方便查找less文件
	sourcemaps = require('gulp-sourcemaps');

gulp.task('compileLess',function(){
	//任务
	gulp.src('css/less/*.less')
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css/css'));
});
gulp.task('watchLess',function(){
	gulp.watch('css/less/*.less', ['compileLess'])
});