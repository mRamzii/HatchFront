module.exports = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    disableHostCheck: config.dev.disableHostCheck,
    devServer: {
        proxy: 'http://localhost:3000',
        ws: true,
        changeOrigin: true
    }
}