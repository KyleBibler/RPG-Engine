var base = require('./webpack.base.config.js');

module.exports = Object.assign({}, base, {
    // enables easier debugging, but adds size to bundle and slows build
    devtool: 'source-map'
})