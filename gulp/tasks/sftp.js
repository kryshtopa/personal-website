'use strict';

module.exports = function() {
  $.gulp.task('sftp', function () {

    return $.gulp.src('dist/*')
      .pipe($.gp.sftp({
          host: 'http://kryshtopa.com/',
          port: '21',
          auth: 'keyMain',
          remotePath: '/dev'
      }));

  });
};