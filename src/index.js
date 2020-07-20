const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json(
    {
      message: 'Hello World!',
      message2: 'Welcome to Node World!'   
    })
});

app.listen(3333 , () => {
  console.log('Server running!')
});