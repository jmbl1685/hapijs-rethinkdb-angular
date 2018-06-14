'use strict'

const config = require('../config/config')
const imageModel = require('../models/image')
const imageController = {}

imageController.AddImage = async (request, h) => {

  try {

    const image = new imageModel({
      url: request.payload.url
    })

    const response = await image.save()
    return h.response(response).code(200)

  } catch (err) {
    return h.response({ err }).code(404)
  }

}

imageController.GetImage = async (request, h) => {
  try {

    const response = await imageModel.run()
    return h.response(response).code(200)

  } catch (err) {
    return h.response({ err }).code(404)
  }

}

imageController.UpdateImage = async (request, h) => {
  try {

    const id = request.params.id
    const image = await imageModel.get(id).run()
    const response = await image.merge({ url: request.payload.url }).save()
    return h.response(response).code(200)

  } catch (err) {
    return h.response({ err }).code(404)
  }

}

imageController.DeleteImage = async (request, h) => {
  try {

    const id = request.params.id
    const image = await imageModel.get(id).run()
    const response = await image.delete()
    return h.response(response).code(200)

  } catch (err) {
    return h.response({ err }).code(404)
  }
}


module.exports = [
  {
      method: 'POST',
      path: '/image',
      options: {
          handler: imageController.AddImage,
          cors: config.cors 
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