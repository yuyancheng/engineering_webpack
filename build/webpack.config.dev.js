const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: 'main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            loaders: ExtractTextPlugin.extract({
                use: ['css-loader'],
            }),
        }]
    },
    plugins: [
        new ExtractEextPlugin({
            filename: `[name]_[contenthash:8].css`,
        }),
    ]
};