var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var appExtract = new ExtractTextPlugin('./css/app-[chunkhash].css');
var vendorExtract = new ExtractTextPlugin('./css/vendor-[chunkhash].css');

module.exports = [
	{
		entry: {
			app: './src/index.js',
			vendor: [
				'angular',
				'angular-animate',
				'angular-aria',
				'angular-datatables',
				'angular-loading-bar',
				'angular-material',
				'angular-ui-router',
				'ngstorage'
			]
		},
		output: {
			filename: './js/[name]-[chunkhash].js',
			path: path.resolve(__dirname, 'dist')
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					loader: 'babel-loader',
					query: {
						presets: ['es2015']
					}
				},
				{
					test: /\.css$/,
					exclude: /(node_modules|bower_components)/,
					loader: appExtract.extract({
						fallbackLoader: 'style-loader',
						loader: 'css-loader?sourceMap'
					})
				},
				{
					test: /\.scss$/,
					exclude: /(node_modules|bower_components)/,
					loader: appExtract.extract({
						fallbackLoader: 'style-loader',
						loader: 'css-loader?sourceMap!sass-loader?sourceMap'
					})
				},
				{
					test: /\.css$/,
					include: /(node_modules|bower_components)/,
					loader: vendorExtract.extract({
						fallbackLoader: 'style-loader',
						loader: 'css-loader?sourceMap'
					})
				},
				{
					test: /\.scss$/,
					include: /(node_modules|bower_components)/,
					loader: vendorExtract.extract({
						fallbackLoader: 'style-loader',
						loader: 'css-loader?sourceMap!sass-loader?sourceMap'
					})
				},
				{
					test: /\.(woff|woff2|eot|ttf)$/, 
					use: { loader: 'url-loader', options: { limit: 100000, name:'./assets/fonts/[name]-[hash].[ext]' } },
				},
				{
					test: /\.png$/, 
					use: { loader: 'url-loader', options: { limit: 100000, name:'./assets/images/[name]-[hash].[ext]' } },
				},
				{
					test: /\.svg$/, 
					use: [ 'file-loader?name=./assets/svg/[name]-[hash].[ext]' ]
				},
				{
					test: /\.jpg$/,
					use: [ 'file-loader?name=./assets/images/[name]-[hash].[ext]' ]
				},
				{
					test: /\.html$/,
					loader: "html-loader"
				},
				{
					test: /\.json$/,
					use: 'json-loader'
				}
			]
		},
		devtool: 'source-map',
		plugins: [
			new CleanWebpackPlugin(['dist']),
			new webpack.optimize.CommonsChunkPlugin({
				names: ['vendor', 'manifest']
			}),
			appExtract,
			vendorExtract,
			new HtmlWebpackPlugin({
				title: 'EQEmu Server Manager',
				template: 'src/index.ejs'
			}),
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"window.jQuery": "jquery"
			})
		]
	}
];
