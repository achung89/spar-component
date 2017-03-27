var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var htmlmin = require('gulp-htmlmin');

gulp.task('vulcanize', function() {
  return gulp.src('spar-src/build.html')
  .pipe(vulcanize({
      stripComments: true,
      inlineScripts: true
  }))
  .pipe(gulp.dest('spar-src/build'));
});

gulp.task('default', ['vulcanize']);