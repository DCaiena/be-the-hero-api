const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')
describe('ONG', () => {

    beforeEach( async () =>{
        await connection.migrate.rollback()
       await connection.migrate.latest()
    })

    afterAll(async () =>{
        await connection.destroy()
    })

    it('Should be able ro create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name:"ATOP",
            email:"ato@gmail.com",
            whatsapp:"91988025525",
            city:"Pará",
            uf:"PA"
        })
        console.log(response.body)
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);


    })
})