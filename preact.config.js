import { resolve } from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'

export default config => {
  config.plugins.push(new CopyWebpackPlugin({
    patterns: [
      { context: `${__dirname}/assets`, from: '*.*' }
    ]
  }))
  config.resolve.alias['~'] = resolve(__dirname, 'src')
}
