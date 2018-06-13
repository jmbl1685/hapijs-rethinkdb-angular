'use strict'

const imageController = require ('../controllers/image')

module.exports = [
    {
        method: 'POST',
        path: '/image',
        options: {
            description: 'Add Image',
            handler: imageController.AddImage
        }
    },
    {
        method: 'GET',
        path: '/image',
        options: {
            description: 'Get Image',
            handler: imageController.GetImage
        }
    },
    {
        method: 'PUT',
        path: '/image',
        options: {
            description: 'Update Image',
            handler: imageController.UpdateImage
        }
    },
    {
        method: 'DELETE',
        path: '/image',
        options: {
            description: 'Delete Image',
            handler: imageController.DeleteImage
        }
    }
]