'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
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
 * Browserify modules
 */
gulp.task('browserify', ['browserify.core']);

/**
 * Browserify @agama/core module
 */
gulp.task('browserify.core', () => browserify('./modules/core/src/browser.js')
    .bundle().pipe(source('agama-core.js')).pipe(gulp.dest('./modules/core/dist')));

/**
 * Watch for modifications and compile
 *
 * TODO: Order of tasks are async, it will be sync
 */
gulp.task('watch', () => gulp.watch(['**/*.ts', '!**/*.d.ts'], ['ts', 'browserify']));

/**
 * Compile and watch for modifications
 *
 * TODO: Order of tasks are async, it will be sync
 */
gulp.task('dev', ['ts', 'browserify', 'watch']);

/**
 * Default task
 */
gulp.task('default', ['ts']);
