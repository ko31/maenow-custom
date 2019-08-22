const gulp = require('gulp');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const imagemin = require('gulp-imagemin');

gulp.task('js', gulp.series(() => {
	return gulp.src(["src/js/*.js"])
		.pipe(concat('script.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js'));
}));

gulp.task('sass', gulp.series(() => {
	return gulp.src('./src/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./src/css'));
}));

gulp.task('css', gulp.series(gulp.parallel('sass'), () => {
	return gulp.src(["src/css/*.css"])
		.pipe(concat('style.min.css'))
		.pipe(minifyCSS())
		.pipe(csso())
		.pipe(gulp.dest('./assets/css'));
}));

gulp.task('image', gulp.series(() => {
	return gulp.src('./src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./assets/images'));
}));

gulp.task('default', gulp.series(gulp.parallel('js', 'css', 'image')));
