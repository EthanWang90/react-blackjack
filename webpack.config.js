const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
	rules: [
	  {
	    test: /\.m?js|jsx$/,
	    exclude: /(node_modules|bower_components)/,
	    use: {
	      loader: 'babel-loader',
	      options: {
	        presets: ['@babel/preset-env','@babel/preset-react',{
						'plugins': ['@babel/plugin-proposal-class-properties']}]
	      }
	    }
		},
		{
			test: /\.m?jpg|jpeg$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'url-loader'
			}
		}
	]
	},
	resolve:{
		alias:{
			'@':path.join(__dirname,'./src')
		}
	},
  watch: true
}; 