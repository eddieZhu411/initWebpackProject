const { merge: webpackMerge } = require("webpack-merge")
const commonConfig = require('./webpack.common.js')

const proConfig = {
	mode: 'production',
}
module.exports = webpackMerge(commonConfig, proConfig)