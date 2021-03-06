const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = ({ config }) => {
  config.module.rules = [];

  config.module.rules.push({
    test: /\.(eot|otf|ttf|woff|woff2|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          context: '/',
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  });

  config.module.rules.push({
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          context: '/',
          name: 'images/[name].[ext]'
        }
      }
    ]
  });

  config.module.rules.push({
    test: /\.s?css$/,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
      { loader: "sass-loader" }
    ]
  });

  config.module.rules.push({
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            require("@babel/preset-typescript").default,
            require("@babel/preset-react").default
          ]
        }
      }
    ]
  });

  config.module.rules.push({
    test: /\.(stories|story).(ts|js)x?$/,
    exclude: [/node_modules/],
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'typescript' }
      }
    ],
    enforce: 'pre'
  });

  config.module.rules.push({
    test: /\.(stories|story).mdx$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            require("@babel/preset-typescript").default,
            require("@babel/preset-react").default
          ],
          plugins: [
            ["@babel/plugin-transform-react-jsx", {
              "pragmaFrag": "React.Fragment"
            }]
          ]
        }
      },
      {
        loader: '@mdx-js/loader',
        options: {
          compilers: [createCompiler({})]
        }
      }
    ]
  });

  config.module.rules.push({
    test: /\.mdx$/,
    exclude: /\.(stories|story).mdx$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            require("@babel/preset-typescript").default,
            require("@babel/preset-react").default
          ],
          plugins: ['@babel/plugin-transform-react-jsx']
        }
      },
      {
        loader: '@mdx-js/loader'
      }
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx', '.mdx');

  config.resolve.plugins = [new TsconfigPathsPlugin()];

  return config;
};
