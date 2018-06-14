'use strict'

const cors = {
    origin: ["*"],
    headers: [
        "Access-Control-Allow-Origin",
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type",
        "CORELATION_ID"
    ],
    credentials: true
}

module.exports = {
    port: 3000,
    cors
}