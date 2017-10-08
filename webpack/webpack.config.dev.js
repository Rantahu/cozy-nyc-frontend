const path = require('path');
const webpack = require('webpack');

let API_HOST = 'localhost:8000';

module.exports = {
    devServer: {
        inline: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, '../static/js/dist'),
        host: '0.0.0.0',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './static/js/src/index.jsx',
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  babelrc: false,
                   presets: ['es2015', 'stage-2', 'react'],
                   plugins: ['transform-decorators-legacy', 'react-hot-loader/babel']
                }
            },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    },
    output: {
        path: path.join(__dirname, '../static/js/dist'),
        filename: 'js/bundle.min.js',
        chunkFilename: '[name].js'
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'API_ROOT': JSON.stringify(`http://${API_HOST}`)
            }
        })
    ]
};
