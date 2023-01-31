const http = require('http');
const express = require('express');
const { PORT } = require('./config');
const { apiRouter, mainRouter } = require('./routers');


const app = express();

// setup other
// setupMiddlewares(app);

app.get('/ping', (req, res, next) =>{
  res.send('pong!')
})

app.use((req, res) =>{
  res.status(404)

  res.send('Not Found!')
})



app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
