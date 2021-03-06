const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const MinifyPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

console.log(process.env.NODE_ENV);

const webpackCommon = {
	output: {
		path: path.resolve(__dirname, './client/dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.scss']
	},
	module: {
		rules: [
			{
				test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options: {
						attrs: [':data-src']
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './client/src/index.html',
			title: 'Challenge Calculator'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	]
};

const webpackDev = {
	mode: 'development',
	entry: {
		home: ['./client/src/js/index.js', './client/src/sass/style.scss']
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
};

const webpackProd = {
	mode: 'production',
	entry: [
		'./client/src/index.html',
		'./client/src/js/index.js',
		'./client/src/sass/style.scss'
	],
	optimization: {
		minimizer: [new OptimizeCSSAssetsPlugin()]
	}
};

let webpackConfig;

if (isProduction) {
	webpackConfig = merge(webpackCommon, webpackProd);
} else {
	webpackConfig = merge(webpackCommon, webpackDev);
}

module.exports = webpackConfig;
