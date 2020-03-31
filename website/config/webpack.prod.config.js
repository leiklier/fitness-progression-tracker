const merge = require('webpack-merge')
// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin')
const workboxPlugin = require('workbox-webpack-plugin')
// Configs
const baseConfig = require('./webpack.base.config')

const prodConfig = env => {
    return merge([
        {
            optimization: {
                runtimeChunk: 'single',
                splitChunks: {
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'vendors',
                            chunks: 'all',
                        },
                    },
                },
                minimizer: [new UglifyJsPlugin()],
            },
            plugins: [
                new MiniCssExtractPlugin(),
                new OptimizeCssAssetsPlugin(),
                new Visualizer({ filename: './statistics.html' }),
                new workboxPlugin.GenerateSW({
                    swDest: 'sw.js',
                    clientsClaim: true,
                    skipWaiting: true,
                }),
            ],
        },
    ])
}

module.exports = env => {
    return merge(baseConfig(env), prodConfig(env))
}