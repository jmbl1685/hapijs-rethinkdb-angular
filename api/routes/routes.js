'use strict'

const imageController = require ('../controllers/image')

module.exports = [
    {
        method: 'GET',
        path: '/image',
        options: {
            description: 'Health Check',
            handler: imageController.AddImage
        }
    }
]