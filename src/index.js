const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json(
    {
      message: 'Hello World!',
      message2: 'Welcome to Node World!'   
    })
});

app.get('/projects', (request, response) => {
  return response.json([
    'GoBarber',
    'GoRestaurant',
    'GitHub Explorer'
    ]);
});

app.post('/projects', (request, response) => {
  return response.json([
    'GoBarber',
    'GoRestaurant',
    'GitHub Explorer',
    'BeTheHero'
    ]);
});


app.put('/projects/:id', (request, response) => {
  return response.json([
    'GoBarber -1 ',
    'GoRestaurant',
    'GitHub Explorer',
    'BeTheHero'
    ]);
});

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'GoBarber',
    'GoRestaurant',
    'GitHub Explorer',
    ]);
});


app.listen(3333 , () => {
  console.log('🚀  Back-end started!');
});