const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');

const options = {
  contentBase: './dist',
  hot: false,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);

const compiler = webpack(config);

const app = new webpackDevServer(compiler, options);

app.listen(3000, 'localhost', () => {
  console.log('dev server listening on port 3000');
});