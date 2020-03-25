const express = require('express');
const ongcontroller = require('./controllers/ongcontrollers');
const incidentcontroller = require('./controllers/incidentcontroller');
const profilecontroller = require('./controllers/profilecontroller');
const sessioncontroller = require('./controllers/sessioncontroller');

const routes = express.Router(); 

routes.get('/ongs',ongcontroller.index); 
routes.post('/ongs', ongcontroller.create);  

routes.get('/incidents',incidentcontroller.index);
routes.post('/incidents',incidentcontroller.create);
routes.delete('/incidents/:id',incidentcontroller.delete);


routes.get('/profile',profilecontroller.index);

routes.post('/session', sessioncontroller.create); 
 
module.exports = routes;



