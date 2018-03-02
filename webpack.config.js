
const path = require('path');

//__dirname = __dirname.charAt(0).toUpperCase() + __dirname.slice(1);

module.exports = {
    entry:['babel-polyfill','./src/client.js'],
    output:{
        path: __dirname + '/dist',
        filename:'index.js'
    },
    devServer:{
        inline:true,
        contentBase:'./public',
        port:3000
    },
    module: {
        loaders: [
            { 
                test:/\.js$/, 
                exclude:/node_modules/, 
                loader:'babel-loader'
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015', 'react']
                }
              },
              { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
              },
              {
                test   : /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
              },
              { 
                test: /\.png$/, 
                loader: "url-loader?limit=100000" 
              },
              { 
                test: /\.jpg$/, 
                loader: "file-loader" 
              },
              {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
              },
              {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
              },
              {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader'
              },
              {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
              }
        ]
    },
};