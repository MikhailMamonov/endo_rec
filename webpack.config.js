


module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
			  test: /\.jsx$/, loader: "babel-loader", exclude: [/node_modules/, /lib/]
		  },
		  {
			  test: /\.js$/, loader: "babel-loader", exclude: [/node_modules/, /lib/]
		  },
		  {
			  test: /\.png$/,
			  loader: "file-loader?name=/images/[hash].[ext]"
		  }, {
			  test: /\.jpg$/,
			  loader: "file-loader?name=/images/[hash].[ext]"
		  }, {
			  test: /\.gif$/,
			  loader: "file-loader?name=/images/[hash].[ext]"
			},

			{ test: /\.svg$/, loader: 'file-loader' },
			
			{
				"exclude": "/node_modules/",
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}

		],
  }
};
