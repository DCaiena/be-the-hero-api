const express = require('express')
const routes = express.Router();
const OngController = require('./controllers/OngsController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
routes.get('/ongs', OngController.index)
routes.post('/ongs',OngController.create)

routes.get('/profile', ProfileController.index )

routes.post('/sessions', SessionController.login )

routes.post('/incidents', IncidentsController.create)
routes.get('/incidents', IncidentsController.index)
routes.delete('/incidents/:id', IncidentsController.delete)


module.exports = routes