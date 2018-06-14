'use strict'

const hapi = require('hapi')
const chai = require('chai')
const server = require('../app')

const chaiHttp = require('chai-http')

chai.use(chaiHttp)
let should = chai.should()

describe('Backend TDD', () => {

    let id = null

    it('GET /image', async () => {

        const response = await server.inject({
            method: 'GET',
            url: '/image'
        })

        should.exist(response)
        chai.expect(response.statusCode).to.equal(200)

    })

    it('POST /image', async () => {

        const response = await server.inject({
            method: 'POST',
            url: '/image',
            payload: {
                url: 'https://avatars2.githubusercontent.com/u/22874642?s=460&v=4'
            }
        })

        id = response.result.id
        should.exist(response)
        chai.expect(response.statusCode).to.equal(200)

    })

    it('PUT /image', async () => {

        const response = await server.inject({
            method: 'PUT',
            url: `/image/${id}`,
            payload: {
                url: 'https://avatars2.githubusercontent.com/u/22874642?s=460&v=4'
            }
        })

        should.exist(response)
        chai.expect(response.statusCode).to.equal(200)

    })

    it('DELETE /image', async () => {

        const response = await server.inject({
            method: 'DELETE',
            url: `/image/${id}`
        })

        should.exist(response)
        chai.expect(response.statusCode).to.equal(200)

    })
})