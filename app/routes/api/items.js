const express = require('express');
const router = express.Router();
const itemsController = require('../../controllers/items');

router.get('/:query', itemsController.list);

module.exports = router;