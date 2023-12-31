const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');


async function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeImagem() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function watch() {
    gulp.watch('./source/styles/**/*.scss', compilaSass);
}

gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagem));
gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
exports.watch = watch;
