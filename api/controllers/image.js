'use strict'

const imageController = {}

imageController.AddImage = async (request, h) => {
  const data = { message: 'Hello from Hapijs' }
  return h.response(data).code(200)
}

imageController.GetImage = async (request, h) => {
  const data = { message: 'Hello from Hapijs' }
  return h.response(data).code(200)
}

imageController.UpdateImage = async (request, h) => {
  const data = { message: 'Hello from Hapijs' }
  return h.response(data).code(200)
}

imageController.DeleteImage = async (request, h) => {
  const data = { message: 'Hello from Hapijs' }
  return h.response(data).code(200)
}



modules.exports = imageController