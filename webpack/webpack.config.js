const path = require('path');
const webpack = require('webpack');

let API_HOST = '';
if (process.env.NODE_ENV === 'production') API_HOST = 'api.cozy.nyc';

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index',
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                loaders: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.min.js'
    },
    resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'API_ROOT': JSON.stringify(`http://${API_HOST}`)
            }
        })
    ]
};
