var express = require('express');
var router = express.Router();
const BlogController  = require("../controller/BlogController");
/* GET home page. */
router.get('/', BlogController.index);
router.post("/", BlogController.create)
router.get("/:id", BlogController.show);
router.put("/:id", BlogController.update)
router.delete("/:id", BlogController.destroy)

module.exports = router;
