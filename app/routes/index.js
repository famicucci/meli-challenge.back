const express = require('express');
const router = express.Router();
const items = require('./api/items');

router.get('/', (req, res) => {
	res.send('Bienvenido a la API de Mercado Libre');
});
router.use('/items', items);

module.exports = router;