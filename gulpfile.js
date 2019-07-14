const gulp = require('gulp')

function copyIndex() {
    return gulp.src('./src/index.html') //将文件读取到了内存中
        .pipe(gulp.dest('./dist')) //pipe的作用就是讲pipe前边的操作结果，传给后续的操作作为输入
}
gulp.task('copyIndex', copyIndex)

function copyHtml() {
    return gulp.src('./src/html/**/*.html')
        .pipe(gulp.dest('./dist/html'))
}
gulp.task('copyHtml', copyHtml)

function copyApi() {
    return gulp.src('./src/api/**/*.php')
        .pipe(gulp.dest('./dist/api'))
}
gulp.task('copyApi', copyApi)


function copyImg() {
    return gulp.src('./src/img/**/*.{png,jpg,gif,bmp,jepg}')
        .pipe(gulp.dest('./dist/img/'))
}

gulp.task('copyImg', copyImg)

let copy = gulp.parallel(copyIndex, copyHtml, copyImg, copyApi)

gulp.task('copy', copy)

const gulpSass = require('gulp-sass')

function sass() {
    return gulp.src('./src/style/**/*.scss')
        .pipe(gulpSass({ outputStyle: 'expanded' })) //outputStyle: 'compact', 'compressed', 'expanded', 'nested'
        .pipe(gulp.dest('./dist/style'))
}

gulp.task('sass', sass)

function copyRestcss() {
    return gulp.src('./src/restcss/*.css')
        .pipe(gulp.dest('./dist/restcss'))
}
gulp.task('copyRestcss', copyRestcss)
const concat = require('gulp-concat')

function jsss() {
    return gulp.src('./src/sprice/**/*.js')
        .pipe(gulp.dest('./dist/js/'))
}
gulp.task('jsss', jsss)

function js() {
    return gulp.src('./src/sprice/**/*.js')
        .pipe(concat('output.js'))
        .pipe(gulp.dest('./dist/js/'))
}
gulp.task('js', js)

function jss() {
    return gulp.src('./src/vendor/**/*.js')
        .pipe(gulp.dest('./dist/vendor/'))
}

gulp.task('jss', jss)


function php() {
    return gulp.src('./src/php/**/*.php')
        .pipe(gulp.dest('./dist/php/'))
}

gulp.task('php', php)

var build = gulp.parallel(copy, sass, js)

gulp.task('build', build)

const spritesmith = require('gulp.spritesmith');
gulp.task('sprite', function() {
    var spriteData = gulp.src('./src/img/icon/**/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css'
    }));
    return spriteData.pipe(gulp.dest('./dist/img/icon/'));
});

const watch = require('gulp-watch');
const connect = require('gulp-connect');

function watchTask() {
    // console.log("aaaa")
    watch('./src/style/**/*.scss', function() {
        sass()

    })
    watch('./src/index.html', function() {
        copyIndex()

    })

    watch('.src/php/**/*.php', function() {
        php()
    })

    watch('./src/sprice/**/*.js', function() {
        jsss()

    })

    watch('./src/html/**/*.html', function() {
        copyHtml()

    })


    watch('./dist/**/*.*', function() {
        gulp.src('./dist/**/*.html')
            .pipe(connect.reload())
    })

}

gulp.task('watch', watchTask)