const thinky = require('thinky')()
const type = thinky.type

const image = thinky.createModel("Image", {
    id: type.string(),
    url: type.string()
})

module.exports = image;