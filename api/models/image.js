const thinky = require('thinky')()
const type = thinky.type

const image = thinky.createModel("Image", {
    id: type.string(),
    url: type.string(),
    createdAt: type.date().default(Date.now())
})

module.exports = image;