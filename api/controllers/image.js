'use strict'

const config = require('../config/config')
const imageModel = require('../models/image')
const cloudinary = require('cloudinary')

cloudinary.config(config.cloudinaryCredentials)

const imageController = {}

imageController.AddImage = async (request, reply) => {

  try {

    const file = request.payload.file;

    let upload = await cloudinary.uploader.upload(file.path)

    const image = new imageModel({
      url: upload.url
    })

    const response = await image.save()

    return reply.response({ response }).code(200)

  } catch (err) {
    return reply.response({ err }).code(404)
  }

}

imageController.GetImage = async (request, reply) => {
  try {

    const response = await imageModel.run()
    return reply.response(response).code(200)

  } catch (err) {
    return reply.response({ err }).code(404)
  }

}

imageController.UpdateImage = async (request, reply) => {
  try {

    const id = request.params.id
    const image = await imageModel.get(id).run()
    const response = await image.merge({ url: request.payload.url }).save()
    return reply.response(response).code(200)

  } catch (err) {
    return reply.response({ err }).code(404)
  }

}

imageController.DeleteImage = async (request, reply) => {
  try {

    const id = request.params.id
    const image = await imageModel.get(id).run()
    const response = await image.delete()
    return reply.response(response).code(200)

  } catch (err) {
    return reply.response({ err }).code(404)
  }
}


module.exports = [
  {
    method: 'POST',
    path: '/image',
    options: {
      handler: imageController.AddImage,
      cors: config.cors,
      payload: {
        output: 'file',
        parse: true,
        allow: 'multipart/form-data'
      }
    }
  },
  {
    method: 'GET',
    path: '/image',
    options: {
      handler: imageController.GetImage,
      cors: config.cors
    }
  },
  {
    method: 'PUT',
    path: '/image/{id}',
    options: {
      handler: imageController.UpdateImage,
      cors: config.cors
    }
  },
  {
    method: 'DELETE',
    path: '/image/{id}',
    options: {
      handler: imageController.DeleteImage,
      cors: config.cors
    }
  }
]