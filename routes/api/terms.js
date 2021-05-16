const router = require("express").Router();
const termsController = require("../../controllers/termsController");

router.route("/")
    .get(termsController.findAll)
    .post(termsController.create);


module.exports = router;