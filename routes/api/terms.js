const router = require("express").Router();
const termsController = require("../../controllers/termsController");

router.route("/")
    .get(termsController.findAll)
    .post(termsController.create);

router
	.route("/:id")
	.get(termsController.findById)
	.put(termsController.update)
	.delete(termsController.remove);

module.exports = router;
