const express = require('express');
const promptController = require('../controllers/prompt-controller');

const routes = express.Router();

routes.get('/api/check', (req, res) => res.status(200).json({ success: true }));
routes.post('/api/prompt', promptController.sendText);

module.exports = routes;