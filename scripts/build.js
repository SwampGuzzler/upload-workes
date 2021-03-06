process.env.NODE_ENV = 'production';

const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const config = require('../config/webpack.prod');
const webpack = require('webpack');

const compiler = webpack(config);

//- Output progress
compiler.apply(new ProgressPlugin(function (percentage, msg) {
  const message = Math.floor(percentage * 100) + '% ' + msg.toString();
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(message);
}));

console.log('\x1B[1mStarting build script\x1B[22m');
console.log('---------------------');

//- Generate build and output stats
compiler.run(function (err, stats) {
  if (err) {
    throw err;
  }

  // Clear process.stdout
  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  // Output some stats
  console.log(stats.toString({
    errorDetails: true,
    warnings: true,
    chunks: false,
    colors: true
  }));

  console.log('\x1B[1mWebpack bundling has completed\x1B[22m');
  console.log('------------------------------');

});
