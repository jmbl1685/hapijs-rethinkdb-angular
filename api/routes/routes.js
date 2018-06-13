'use strict'

const imageController = require('../controllers/image')

const routes = []

module.exports = routes
    .concat(imageController)
//  .concat('Other controller') ...etc
