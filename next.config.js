const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
const { join } = require('path')
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/
})
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  [withMDX, {
    pageExtensions: ['js', 'jsx', 'mdx']
  }]
], {
  webpack: config => {

    config.module.rules.forEach((rule) => {

      // console.log(rule)

      if(rule.test.toString().includes('js')) {

        rule.use = [
          rule.use,
          {
            loader: 'linaria/loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          }
        ]

      }

    })

    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: ExtractCssChunks.loader,
          options: {
            // only enable hot in development
            hot: process.env.NODE_ENV === 'development',
            // if hmr does not work, this is a forceful method.
            reloadAll: true,
          },
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
          },
        },
      ],
    })

    config.plugins.push(new ExtractCssChunks({
      filename: 'styles-[contenthash].css',
    }))

    return config

  }
})
