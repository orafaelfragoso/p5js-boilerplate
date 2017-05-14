var gulp        = require('gulp'),
    browserSync = require('browser-sync').create();


gulp.task('default', function() {
  browserSync.init({
    server: {
      baseDir: './',
      localOnly: true
    }
  });

  gulp.watch('index.html').on('change', browserSync.reload);
  gulp.watch('js/**/*.js').on('change', browserSync.reload);
  gulp.watch('css/**/*.css').on('change', browserSync.reload);
});
