var gulp = require('gulp');

// gulp file 추가시 매번 require를 추가하지 않기 위해.
var fs = require('fs');
fs.readdirSync(__dirname + '/gulp').forEach(function(task){
    require('./gulp/' + task)
});

/*
gulp.task('build', ['js', 'css']);
gulp.task('watch', ['watch:js', 'watch:css']);
*/
gulp.task('dev', ['watch:css', 'watch:js', 'dev:server']);


