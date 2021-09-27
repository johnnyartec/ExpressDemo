var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const tableNo = req.params["tableno"];
  res.render("index", { tableNo: tableNo });
});

module.exports = router;
