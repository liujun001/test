var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');//仅用一个插件示例

gulp.task('server',['concat'],function(){
  browserSync.init({
    server:'.'
  });
  gulp.watch('src/*.scss',['concat']);
  gulp.watch(['./*.html','src/*.scss']).on('change',browserSync.reload)
})

gulp.task('sass',function(){
  var precessors=[
    autoprefixer
  ];

  return gulp.src('src/*.scss')
      .pipe(sass({outputStyle:'expanded'}))
      .pipe(postcss(precessors))
      .pipe(gulp.dest('dist/build'))
})

gulp.task('concat',['sass'],function(){
  return gulp.src('./dist/build/*.css')
      .pipe(concat('index.css'))
      .pipe(gulp.dest('./dist'))
})

gulp.task('default',['server'])
