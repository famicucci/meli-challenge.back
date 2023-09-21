const express = require("express");
const router = express.Router();
const itemsController = require("../../controllers/items");

router.get("/", itemsController.list);
router.get("/:id", itemsController.oneItem);

module.exports = router;
