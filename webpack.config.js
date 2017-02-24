const nodeExternals = require('webpack-node-externals')
const { join, resolve } = require('path')

const sourceDir = resolve('source')
const buildDir = resolve('build')

module.exports = {
  entry: join(sourceDir, 'index.tsx'),
  output: {
    filename: 'bundle.js',
    path: buildDir
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      include: sourceDir,
      use: [ 'babel-loader', 'ts-loader' ]
    }]
  },
  externals: [ nodeExternals() ],
  resolve: {
    extensions: [ '.tsx', '.ts' ]
  }
}
