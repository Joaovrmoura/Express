const path = require('path');

module.exports = {
  mode: 'development',
  entry: './frontend/main.js', // Caminho para o arquivo principal
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Verifica se é um arquivo CSS
        use: ['style-loader', 'css-loader'], // Aplica os loaders
      },
    ],
  },
  devtool: 'source-map',
};
