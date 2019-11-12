const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const pkg = require('./package.json');
const babelConfig = require('./babel.config');

const webpackConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        disableHostCheck: true,
        contentBase: path.resolve(__dirname, 'docs'),
    },
    entry: path.resolve(__dirname, 'src/index.js'),
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                // XXX: due to untranspiled code in styleguide's node_modules, it needs to include them
                // https://github.com/styleguidist/react-styleguidist/blob/f14e8e7f403aa32045b9f61e4e4f1a7776146d8b/examples/ie11/styleguide.config.js#L4
                exclude: /node_modules\/(?!(ansi-styles|strip-ansi|ansi-regex|react-dev-utils|chalk|regexpu-core|unicode-match-property-ecmascript|unicode-match-property-value-ecmascript|acorn-jsx)\/).*/,
                options: babelConfig
            },
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]---[hash:base64:5]',
                            },
                            importLoaders: 1,
                            localsConvention: 'camelCase',
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff'
                }
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    }
};

module.exports = {
    title: `React Grid System v${pkg.version}`,
    sections: [
        {
            name: 'Layout: Flexbox',
            content: path.resolve(__dirname, 'styleguide/flexbox/README.md')
        },
        {
            name: 'Layout: Floats',
            content: path.resolve(__dirname, 'styleguide/floats/README.md')
        },
        {
            name: 'Responsive Utilities',
            content: path.resolve(__dirname, 'styleguide/responsive-utilities/README.md')
        },
        {
            name: 'Components',
            components: [
                'Provider',
                'Container',
                'Row',
                'Col',
                'Hidden',
                'Visible',
                'ScreenClass',
            ].map(c => path.resolve(__dirname, `src/${c}.jsx`))
        }
    ],
    require: [
        '@babel/polyfill',
        path.resolve(__dirname, 'styleguide/setup.js'),
        path.resolve(__dirname, 'styleguide/styles.css')
    ],
    ribbon: {
        url: pkg.homepage,
        text: 'Fork me on GitHub'
    },
    serverPort: 8080,
    exampleMode: 'expand',
    usageMode: 'expand',
    showSidebar: true,
    styleguideComponents: {
        StyleGuideRenderer: path.join(__dirname, 'styleguide/components/StyleGuideRenderer.jsx'),
        Wrapper: path.join(__dirname, 'styleguide/components/Wrapper.jsx'),
    },
    styleguideDir: 'docs/',
    webpackConfig: webpackConfig
};
