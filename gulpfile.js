var gulp = require('gulp');
var prefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var prettify = require('gulp-jsbeautifier');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gcmq = require('gulp-group-css-media-queries');

gulp.task('build', function () {
    return browserify({entries: './src/scripts/index.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist/js/'));
});


gulp.task('style', function(){
    gulp.src('src/styles/all.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(prefixer(['ie >= 9', '> 5%']))
        .pipe(gcmq())
        .pipe(prettify({
            indent_level: 4,
            eol: "\r\n"
        }))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', ['build', 'style'], function () {
    gulp.watch('src/scripts/**/**', ['build']);
    gulp.watch('src/styles/**/**', ['style'])
});

gulp.task('default', ['watch']);