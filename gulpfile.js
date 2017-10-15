const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
// const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnext = require('cssnext');
const precss = require('precss');
const neat = require('postcss-neat');

gulp.task('html', function () {
    gulp.src('./src/index.html')
      .pipe(gulp.dest('./dest'))
});

// gulp.task('styles', function () {
//     gulp.src('./src/scss/main.scss')
//       .pipe(sass({includePaths: ['./src/scss']}))
//       .pipe(autoprefixer())
//       .pipe(gulp.dest('./dist/css'))
//       .pipe(browserSync.reload({stream: true}));
// });

gulp.task('css', function () {
  var processors = [
  	autoprefixer({browsers: ['last 1 version']}),
	  cssnext,
	  precss,
	  neat({
	  	neatGridColumns: '12'
	  })
  ];
  return gulp.src('./src/sass/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest/css'))
    pipe(browserSync.reload({stream: true}));
});

gulp.task('script', function () {
    gulp.src('./src/js/index.js')
      .pipe(babel({
          presets:[
            ['env'],
            ['es2015']
          ]
        }))
      .pipe(gulp.dest('./dest/js'))
      .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './dest/',
    },
    notify: false
  });

  gulp.watch('./src/sass/*.css', ['css']).on('change', browserSync.reload);
  gulp.watch('./**/*.html', ['html']).on('change', browserSync.reload);
  gulp.watch('./src/js/*.js', ['script']).on('change', browserSync.reload);
});

gulp.task('default', ['html', 'css', 'script', 'serve']);
