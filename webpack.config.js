module.exports = {
  entry: './src/app.ts',
  output: {
    filename: './dist/bundle.js',
    libraryTarget: 'var',
    library: 'Wall'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
