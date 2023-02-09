const express = require('express');
const {PORT, svgFolder} = require('./config');
const {apiRouter, mainRouter} = require('./routers');
const setupMiddlewares = require('./middlewares');
const errorHandler = require('./middlewares/errorHandler');
const {NotFoundApiError} = require("./validators/errors/ApiError");



const app = express();


// setup middlewares
setupMiddlewares(app)

app.use(express.json());

// api routes
app.use('/api', apiRouter)

// main routes
app.use('/', mainRouter)





app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
