const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist/js')
    },
    resolve: {
        // 先尝试 ts tsx 后缀的 Typescript 源码文件
        extensions: ['.ts', 'tsx', '.js'],
    },
    module: {
        rules: [
            {
                // 同时匹配 ts tsx 后缀的 Type Script 源码文件
                test: /\.tsx?$/,    
                loaders: ['awesome-typecript-loader'],
            },
            // 让 tsc 将 vue 文件当成一个 Type Script 模块去处理，以解决 moudle not
            // found 的问题， ts c 本身不会处理 .vue 结尾的文件
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: 'node_modules',
                appendTsSuffixTo: [/\.vue$/],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            }
        ]
    },
    devtool: 'source-map',
};