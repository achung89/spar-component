var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');

gulp.task('vulcanize', function() {
  return gulp.src('app/elements/elements.html')
    .pipe(vulcanize())
    .pipe(gulp.dest('dist/elements'));
});

gulp.task('default', ['vulcanize']);