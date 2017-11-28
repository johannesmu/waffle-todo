var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');
var minify = require('gulp-minify');
var cleancss = require('gulp-clean-css');
var watch = require('gulp-watch');
var runsequence = require('run-sequence');
var browserSync = require('browser-sync')
var prettify = require('gulp-prettify');
var concat = require('gulp-concat');

var buildpath = 'build';

gulp.task('html',function(){
  return gulp.src('templates/*.pug')
  .pipe(pug())
  .pipe(prettify())
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest(buildpath));
});

gulp.task('sass', function(){
  return gulp.src('scss/*.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(cleancss())
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest(buildpath+'/css'));
});

gulp.task('js', function(){
  return gulp.src(['js/classes.js',
  'js/form-module.js',
  'js/task-module.js',
  'js/storage-module.js',
  'js/template-module.js',
  'js/ui-module.js',
  'js/settings-module.js',
  'js/main-module.js'])
  .pipe(concat('main.js'))
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest(buildpath+'/js'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {baseDir: 'build'},
    port: '8082'
  })
});

gulp.task('images' , function() {
  return gulp.src('images/**')
  .pipe(gulp.dest(buildpath+'/images'));
});

gulp.task('watch', function(){
  runsequence('sass','html','js','images','browserSync');
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('templates/*.pug', ['html']);
  gulp.watch('js/*.js', ['js']);
});
