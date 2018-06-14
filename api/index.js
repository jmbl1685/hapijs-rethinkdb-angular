'use strict'

const server = require('./app')

const init = async () => {
    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
}

init()