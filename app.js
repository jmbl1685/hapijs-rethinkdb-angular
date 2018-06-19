'use strict'

const hapi = require('hapi')
const config = require('./config/config')
const routes = require('./routes/routes')

const server = hapi.server({
    port: config.port
}, { cors: true })

server.route(routes)

/* --- Static Files Routes --- */
server.route({
    method: 'GET',
    path: '/{folder}/{file}',
    handler: (request, reply) => {
        console.log(`views/${request.params.folder}/${request.params.file}`)
        return reply.file(`views/${request.params.folder}/${request.params.file}`)
    }
})

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        return reply.file('views/index.html')
    }
})


module.exports = server