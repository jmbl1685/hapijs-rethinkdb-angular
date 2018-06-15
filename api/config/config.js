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
    cloud_name: 'your_cloud_name',
    api_key: 'your_key',
    api_secret: 'your_secret'
}

module.exports = {
    cloudinaryCredentials,
    port: 3000,
    cors
}