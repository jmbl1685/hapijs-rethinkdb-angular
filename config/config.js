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

const cloudinaryCredentials = {
    cloud_name: 'xxx',
    api_key: 'xxx',
    api_secret: 'xxx'
}

module.exports = {
    cloudinaryCredentials,
    port: 3000,
    cors
}