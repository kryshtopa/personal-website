'use strict';

module.exports = function() {
  $.gulp.task('sprite', function () {

    return $.gulp.src('source/images/sprite/**/*')
      .pipe($.spritesmith({
        cssName: 'sprite.scss', 
        imgName: 'sprite.png',
        cssFormat: 'css',
        imgPath: '../images/sprite.png',
        padding: 20
        // retinaSrcFilter: 'app/images/sprites/*@2x.png',
        // retinaImgName: 'sprites@2x.png'
      }))
      .pipe($.gp.if('*.png', $.gulp.dest('source/images')))
      .pipe($.gp.if('*.scss', $.gulp.dest('source/style/common')));

  });
};