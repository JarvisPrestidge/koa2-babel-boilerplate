'use strict'

const port = process.env.port || 3000
const  env = process.env.node_env || 'development'
const  src = env === 'production' ? './build/app' : './src/app'

require('babel-polyfill')
if (env === 'development') require('babel-register')

const app = require(src).default
app.listen(port)

console.log('listening on port ' + port + '...' )