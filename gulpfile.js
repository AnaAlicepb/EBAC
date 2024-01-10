const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compilarSass() {
  console.log("Iniciando função compilarSass");
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on('error', sass.logError) // Tratamento de erro
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

function funcaoPadrao(callback) {
  setTimeout(function(){
    console.log("Executando via gulp");
    callback();
  }, 2000);
}

function dizoi(callback) {
  console.log("olá gulp");
  dizTchau();
  callback();
}

function dizTchau() {
  console.log("Tchau Gulp");
}

exports.default = gulp.series(funcaoPadrao, dizoi);
exports.dizoi = dizoi;
exports.sass = compilarSass;
exports.watch = function () {
  gulp.watch("./source/styles/*.scss"), gulp.series(compilarSass);
};
exports.javascript = comprimirJS;
exports.images = comprimirImagens;
