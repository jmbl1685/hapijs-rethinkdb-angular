'use strict'

const hapi = require('hapi')
const config = require('./config/config')
const routes = require('./routes/routes')

const server = hapi.server({
    port: config.port
}, { cors: true })

server.route(routes)

module.exports = server