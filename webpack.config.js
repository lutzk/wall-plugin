var path = require('path');
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
  entry: {
    main: [
      './src/scss/main',
      './src/app.ts'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'Wall',
    filename: 'bundle.js',
    publicPath: '/',
    libraryTarget: 'var'
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
  plugins: [
    extractTextPlugin
  ]
}
