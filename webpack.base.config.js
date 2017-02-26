/**
 * @fileoverview Configuration for webpack bundling. 
 */

module.exports = {
    context: __dirname + '/game1',
    entry: './game/main.js',
    resolve: {
        extensions: ['.js', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    },
    output: {
        filename: 'game.bundle.js',
        path: __dirname + '/dist'
    }
};