var gulp=require('gulp')
var browserSync=require('browser-sync').create()
var sass=require('gulp-sass')

//自动刷新
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

//编译sass
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass({'outputStyle':'expanded'}))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
//todo:more details
