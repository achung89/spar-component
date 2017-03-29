var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');

gulp.task('vulcanize', function() {
  return gulp.src('spar-src/entry.html')
  .pipe(vulcanize({
      stripComments: true,
      inlineScripts: true
  }))
  .pipe(rename('prod.html'))
  .pipe(gulp.dest('spar-src/build'))
  .pipe(gulp.dest('docs/src/build'));
});

gulp.task('default', ['vulcanize']);