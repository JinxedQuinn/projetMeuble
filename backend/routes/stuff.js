const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff')

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
  // router.post('/', auth, stuffCtrl.createThing);
  // router.put('/:id', auth, stuffCtrl.modifyThing);
  // router.delete('/:id', auth, stuffCtrl.deleteThing);
  // router.get('/:id', auth, stuffCtrl.getOneThing);
  // router.get('/', auth, stuffCtrl.getAllThings);

  router.post('/', auth, stuffCtrl.createThing);
  router.put('/:id', auth, stuffCtrl.modifyThing);
  router.delete('/:id', auth, stuffCtrl.deleteThing);
  router.get('/:id', stuffCtrl.getOneThing, auth,);
  router.get('/', stuffCtrl.getAllThings, auth,);

  module.exports = router;