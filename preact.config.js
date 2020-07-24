import CopyWebpackPlugin from 'copy-webpack-plugin'

export default config => {
  config.plugins.push(new CopyWebpackPlugin({
    patterns: [
      { context: `${__dirname}/assets`, from: '*.*' }
    ]
  }))
}
