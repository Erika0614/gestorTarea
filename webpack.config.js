const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', // punto de entrada de la aplicación
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Regex para identificar archivos CSS
                use: ['style-loader', 'css-loader'], //loaders para procesar arcivos CSS
            },
            {
                test: /\.js%/, //Regex para identificar archivos JS
                exclude: /node_modules/, // Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', //Loader para llevar JS moderno a JS antiguo para que sea compatible c/todos los navegadores
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', // Generar source maps para facilitar la depuración
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true, // Habilitar compresión gzip
        port: 9000, // Puerto del servidor de desarrollo
    },
};