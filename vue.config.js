const HtmlWebpackPlugin = require('html-webpack-plugin'),
    dayjs = require('dayjs'),
    thisLink = (arr) => {
        let link = ''
        arr.forEach(v => {
            link += '<link rel="'
                + v.rel +
                '" href="'
                + v.href +
                '" '
                + (v.type !== undefined ? 'type="' + v.type + '"' : '')
                + (v.sizes !== undefined ? 'sizes="' + v.sizes + '"' : '') +
                '>'
        })
        return link
    }

module.exports = {
    assetsDir: process.env.VUE_APP_ASSETS,
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    productionSourceMap: false,
    
    chainWebpack: config => {
        config.plugins.delete('prefetch')
    },

    configureWebpack: config => {
        config.plugins.forEach((val) => {
            if (val instanceof HtmlWebpackPlugin) {

                if (process.env.NODE_ENV === 'production') {
                    // Build 时不删掉注释
                    val.options.minify.removeComments = false;
                }

                // 标题
                val.options.title = process.env.VUE_APP_SITE_TITLE

                val.options.meta = {
                    viewport: 'width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no',
                    'X-UA-Compatible': {
                        'http-equiv': 'X-UA-Compatible',
                        content: 'IE=Edge,chrome=1'
                    },
                    "theme-color": ""
                }

                val.options.link = thisLink([
                    { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' },
                    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
                    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Varela+Round' },
                    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe' }
                ])

                val.options.copyright =
                    '|  ____          _  __          ____  __  __  _____ ' + '\n' +
                    '| |  _ \\   /\\   | |/ /    /\\   / __ \\|  \\/  |/ ____|' + '\n' +
                    '| | |_) | /  \\  | \' /    /  \\ | |  | | \\  / | |  __ ' + '\n' +
                    '| |  _ < / /\\ \\ |  <    / /\\ \\| |  | | |\\/| | | |_ |' + '\n' +
                    '| | |_) / ____ \\| . \\  / ____ \\ |__| | |  | | |__| |' + '\n' +
                    '| |____/_/    \\_\\_|\\_\\/_/    \\_\\____/|_|  |_|\\_____|';

                // Build Date
                val.options.buildDate = (process.env.NODE_ENV === 'production') ? dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss") : "Dev";
            }
        })
    }
}