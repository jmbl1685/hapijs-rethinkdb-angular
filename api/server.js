'use strict'

const hapi = require('hapi')
const config = require('./config/config')
const routes = require('./routes/routes')

const server = hapi.server({
    port: config.port
})

server.route(routes)

// server.route({
//   method: 'GET',
//   path: '/',
//   handler: (request, h) => {
//       const data = { message: 'Hello from Hapijs'}
//       return h.response(data).code(200)
//   }
// })

const init = async () => {

    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {

    console.log(err)
    process.exit(1)
})

init()