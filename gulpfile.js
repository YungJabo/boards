const {src, dest} = require('gulp');

function copy() {
    return src('./styles/*.scss').pipe(dest('dist'))
}

exports.copy = copy
