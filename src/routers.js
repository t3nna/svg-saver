const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

// const svgExists = require('./validators/middlewares/svgExists');
const api = require('./controllers/api');
const ping = require('./controllers/ping');
const pages = require('./controllers/pages');
const {NotFoundApiError} = require("./validators/errors/ApiError");


// routes for /api

const apiRouter = new express.Router();

apiRouter.get('/svgs', api.getSvgs);
apiRouter.get('/svgs/:id',  api.getSvg);
apiRouter.post('/svgs', api.addSvg);
apiRouter.put('/svgs/:id', api.likeSvg);
apiRouter.delete('/svgs/:id', api.deleteSvg);

exports.apiRouter = apiRouter;

// routes for /

const mainRouter = new express.Router();

mainRouter.use('/files/:filename', pages.downloadSvg);


mainRouter.get('/ping', ping)

mainRouter.use((req, res, next) => {
  const err = new NotFoundApiError('Page not found XDXD')
  next(err)
})
// mainRouter.get('/', pages.home)

exports.mainRouter = mainRouter;
