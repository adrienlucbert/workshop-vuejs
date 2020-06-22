const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        purgecss({
            content: [
                './src/**/*.html',
                './src/**/*.vue'
            ]
        }),
        autoprefixer(),
        cssnano({
            preset: 'default'
        })
    ]
}