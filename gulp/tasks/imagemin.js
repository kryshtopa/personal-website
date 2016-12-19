'use strict';

module.exports = function() {
  $.gulp.task('imagemin', function() {
	return $.gulp.src(['./source/images/**/*.*', '!./source/images/sprite/*.*'], { since: $.gulp.lastRun('copy:image') })
		.pipe($.gp.imagemin({
	  		progressive: true,
	  		interlaced: true,
	  		use: [$.imageminPngquant()]
		}))
		.pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};
