const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function padrao(callback) {
    compilarSass();
    console.log("Finalizada função compilarSass");
    comprimirJS();
    console.log("Finalizada função comprimirJS");
    comprimirImagens();
    console.log("Finalizada função comprimirImagens");
    callback();
  }

function compilarSass() {
  console.log("Iniciando função compilarSass");
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on('error', sass.logError) 
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
}

function comprimirJS() {
  console.log("Iniciando função comprimirJS");
  return gulp
    .src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/scripts"));
}

function comprimirImagens() {
  console.log("Iniciando função comprimirImagens");
  return gulp
    .src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}
exports.default = padrao;
 exports.sass = compilarSass;
 exports.javascript = comprimirJS;
 exports.images = comprimirImagens;
exports.watch = function () {
  gulp.watch("./source/styles/*.scss"), gulp.series(compilarSass);
};





