const express = require('express');
const router = express.Router();

// const Thing = require('../models/thing');
const stuffCtrl = require('../controllers/stuff')

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
  router.post('/', stuffCtrl.createThing);
  router.put('/:id', stuffCtrl.modifyThing);
  router.delete('/:id', stuffCtrl.deleteThing);
  router.get('/:id', stuffCtrl.getOneThing);
  router.get('/', stuffCtrl.getAllThings);

  module.exports = router;