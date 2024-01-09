const gulp = require('gulp');

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

exports.default = gulp.series(funcaoPadrao,dizoi);
exports.dizoi = dizoi;
