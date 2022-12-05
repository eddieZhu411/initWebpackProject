const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require("webpack")
const processEnv = process.env
require('dotenv').config({ path: path.resolve(__dirname + '/../env/.env.' + processEnv.project) })

module.exports = {
	entry: './src/main.js',
	mode: 'none',
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(processEnv)
		})
	]
}