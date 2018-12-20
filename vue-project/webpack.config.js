// 配置项目
module.exports = {
	// vue入口文件
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.js'
		}
	},
	// 项目入口文件
	entry: './src/main.js',
	// 发布文件
	output: {
		filename: './dist/main.js'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// es6
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			// vue
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			// css
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			// scss
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	}
}