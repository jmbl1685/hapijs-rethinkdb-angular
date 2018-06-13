'use strict'

const imageModel = require('../models/image')
const imageController = {}

imageController.AddImage = async (request, h) => {
  const image = new imageModel({
    url: request.payload.url
  })

  const response = await image.save()
  return h.response(response).code(200)
}

imageController.GetImage = async (request, h) => {
  const response = await imageModel.run()
  return h.response(response).code(200)
}

imageController.UpdateImage = async (request, h) => {
  const data = { message: 'Hello from Hapijs' }
  return h.response(data).code(200)
}

imageController.DeleteImage = async (request, h) => {
  const data = { message: 'Hello from Hapijs' }
  return h.response(data).code(200)
}

module.exports = imageController