var ExtractTextPlugin = require('extract-text-webpack-plugin');

var styleOptions = {};
styleOptions.use = [
  {
    loader: "css-loader",
    options: {
      importLoaders: 1
    }
  }, 
  {
    loader: "sass-loader",
    options: {
      outputStyle: 'compressed',
      sourceMap: false
    }
  }
];

var extractTextPlugin = new ExtractTextPlugin({
  filename: '[name].css',
  disable: false,
  allChunks: true,
});

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: './dist/bundle.js',
    libraryTarget: 'var',
    library: 'Wall'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(styleOptions),
      },
    ]
  },
  plugins: [extractTextPlugin]
}
