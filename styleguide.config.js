const path = require('path');
const stylusLoader = require('stylus-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nib = require('nib');
const webpack = require('webpack');
const pkg = require('./package.json');

const webpackConfig = {
    mode: 'production',
    devtool: 'source-map',
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
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]---[hash:base64:5]',
                            camelCase: true,
                            importLoaders: 1
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
        new stylusLoader.OptionsPlugin({
            default: {
                // nib - CSS3 extensions for Stylus
                use: [nib()],
                // no need to have a '@import "nib"' in the stylesheet
                import: ['~nib/lib/nib/index.styl']
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
    title: 'React Grid System',
    require: [
        '@babel/polyfill',
        path.resolve(__dirname, 'styleguide/setup.js'),
        path.resolve(__dirname, 'styleguide/styles.css'),
    ],
    sections: [
        {
            name: 'Flexbox',
            content: path.resolve(__dirname, 'styleguide/flexbox/README.md'),
        },
        {
            name: 'Floats',
            content: path.resolve(__dirname, 'styleguide/floats/README.md'),
        },
        {
            name: 'Responsive Utilities',
            content: path.resolve(__dirname, 'styleguide/responsive-utilities/README.md'),
        },
        {
            name: 'Components',
            components: [
                'Provider',
                'Container',
                'Row',
                'Col',
                'Hidden',
                'Visible'
            ].map(c => path.resolve(__dirname, `src/${c}.jsx`)),
        }
    ],
    ribbon: {
        url: pkg.homepage,
        text: 'Fork me on GitHub'
    },
    serverPort: 8080,
    exampleMode: 'expand',
    usageMode: 'expand',
    showSidebar: true,
    styleguideDir: 'docs/',
    webpackConfig: webpackConfig
};
