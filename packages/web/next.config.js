require('dotenv').config()
const webpack = require('webpack')

const fs = require('fs')
const path = require('path')
const compose = require('next-compose')
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const withSass = require('@zeit/next-sass')

// make your antd custom effective
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = compose([
   [withSass, {
     sassLoaderOptions : {
       includePaths : ['/scss/_utilities.scss'],
     },
   }],
   [withLess, {
     lessLoaderOptions : {
       javascriptEnabled : true,
       modifyVars: themeVariables,
     },
   }],
   {
     webpack: (config) => {
           config.plugins.push(
             new webpack.EnvironmentPlugin(process.env)
           )

           return config;
       }
   }
 ])
