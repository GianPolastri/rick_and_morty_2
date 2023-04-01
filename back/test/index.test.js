const app = require('../src/server');
const session = require('supertest');
const agent = session(app);

describe('Test de rutas', () => {

    describe('GET rickandmorty/{id}', () => {
        it('Responde con status: 200', () => {
            agent.get('/rickandmorty/1').expect(200);
        })

        // xit('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"'), () => {

        // }
    })
})