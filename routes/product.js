const logger = require("../common/getlogger");
const product = require("../modules/product/product");
var express = require("express");
var router = express.Router();

//localhost:3000/api/v1/product/
logger.debug("getAllProducts");

http: router.get("/", product.getAllProducts);
router.post("/", product.addProduct);
router.put("/", product.updateProduct);
router.delete("/:id", product.deleteProduct);

module.exports = router;
