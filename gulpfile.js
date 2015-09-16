var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var imageResize = require('gulp-image-resize');
var clean = require('gulp-clean');

gulp.task('watch', function() {
    gulp.watch('_assets/*', function(event) {
        gulp.src(event.path)
            .pipe(imageResize({ 
                width : 640,
                crop : false,
                upscale : false
            }))
            .pipe(imagemin({
                progressive: true,
                use: [pngquant()],
            }))
            .pipe(gulp.dest('images'));
        gulp.src(event.path)
            .pipe(imageResize({ 
                width : 277,
                crop : false,
                upscale : false
            }))
            .pipe(imagemin({
                progressive: true,
                use: [pngquant()],
            }))
            .pipe(gulp.dest('images/waterfall'));
    });
});

gulp.task('default', ['clean', 'minimize']);

gulp.task('minimize', ['waterfall', 'post'], function() {
    return gulp.src('dist/**/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()],
        }))
        .pipe(gulp.dest('images'));
});

gulp.task('waterfall', function() {
    return gulp.src('_assets/*')
        .pipe(imageResize({ 
            width : 277,
            crop : false,
            upscale : false
        }))
        .pipe(gulp.dest('dist/waterfall'));
});

gulp.task('post', function() {
    return gulp.src('_assets/*')
        .pipe(imageResize({ 
            width : 640,
            crop : false,
            upscale : false
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
    return gulp.src(['images', 'dist'], {read: false})
        .pipe(clean());
});
