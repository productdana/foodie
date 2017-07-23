const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', storeController.createStore);

// router.get('/', (req, res) => {
//   const wes = {name: 'wes', age: 100, cool: true}
//   res.render('hello', { // hello is the name of the pug file
//     name: 'dana',
//     title: 'i love food'
//   })
// })
module.exports = router;
