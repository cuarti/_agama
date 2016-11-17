'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const merge = require('merge2');


let tsp = ts.createProject('tsconfig.json');

/**
 * Compile typescript
 */
gulp.task('ts', () => {

    let tspr = tsp.src().pipe(tsp());

    return merge([
        tspr.dts.pipe(gulp.dest('.')),
        tspr.js.pipe(gulp.dest('.'))
    ]);

});

/**
 * Watch for modifications and compile
 */
gulp.task('watch', () => gulp.watch(['**/*.ts', '!**/*.d.ts'], ['ts']));

/**
 * Compile and watch for modifications
 */
gulp.task('dev', ['ts', 'watch']);

/**
 * Default task
 */
gulp.task('default', ['ts']);
