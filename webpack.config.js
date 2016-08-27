function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}

module.exports = {
    entry: {
        app: getEntrySources([
            './src/app.js'
        ])
    },
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ }
        ]
    }
};