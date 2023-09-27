const express = require("express");
const router = express.Router();
const items = require("./api/items");
const { checkSignature } = require("./middleware");

router.get("/", (req, res) => {
  res.send("Bienvenido a la API de Mercado Libre");
});
router.use("/items", checkSignature, items);

module.exports = router;
