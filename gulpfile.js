/*
* Dependencias
*/
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-minify-css'),
    connect = require('gulp-connect'),
    inject = require('gulp-inject');

/*
* Tareas
*/
var jsTasks = ['con-val-min-JS'],
    imgTasks = ['min-IMG'],
    cssTasks = ['min-CSS'];

/*
* Rutas
*/
var paths = {
    js_source: {
        origin_path: 'app-web/scripts/**/*.js',
        dest_path: 'app-web-deploy/scripts/'
    },
    img_source: {
        origin_path: 'app-web/img/*.*',
        dest_path: 'app-web-deploy/img/'
    },
    css_source: {
        origin_path: 'app-web/css/*.css',
        dest_path: 'app-web-deploy/css/'
    }
};

/*
* Watch
*/
gulp.task('default', ['con-val-min-JS', 'min-IMG', 'min-CSS', 'watch', 'connect']);

/*
* Connect
*/
gulp.task('connect', function() {
    connect.server({
        port: 8888
    });
});

/*
* Watch
*/
gulp.task('watch', function () {
    gulp.watch(paths.js_source.origin_path, jsTasks);
    gulp.watch(paths.img_source.origin_path, imgTasks);
    gulp.watch(paths.css_source.origin_path, cssTasks);
});

/*
* Concatenación, Validación y Minificación de archivos JS
*/
gulp.task('con-val-min-JS', function () {
  gulp.src(paths.js_source.origin_path)
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest(paths.js_source.dest_path))
});

/*
* Minificación de imágenes PNG, JPEG, GIF y SVG con imagemin
*/
gulp.task('min-IMG', function () {
    return gulp.src([paths.img_source.origin_path])
        .pipe(imagemin())
        .pipe(gulp.dest(paths.img_source.dest_path));
});

/*
* Minificación de archivos css con clean-css
*/
gulp.task('min-CSS', function() {
    gulp.src(paths.css_source.origin_path)
        .pipe(minifyCSS())
        .pipe(gulp.dest(paths.css_source.dest_path))
});

/*
* Inject JS y CSS
*/
gulp.task('inject-JS-CSS', function () {
    var target = gulp.src('app-web/index.html');
    var sources = gulp.src([paths.js_source.dest_path], {read: false});
    return target.pipe(inject(sources)).pipe(gulp.dest('app-web-deploy/'));
});