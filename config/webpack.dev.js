const { merge: webpackMerge } = require("webpack-merge")
const commonConfig = require('./webpack.common.js')

const devConfig = {
	mode: 'development',
	devtool: 'cheap-source-map'
}

module.exports = webpackMerge(commonConfig, devConfig)