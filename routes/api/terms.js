const router = require("express").Router();
const termsController = require("../../controllers/termsController");
const withAuth = require("../../utils/auth");

router
	.route("/")
	.get(termsController.findAll)
	.post(withAuth, termsController.create);

router
	.route("/:id")
	.get(termsController.findById)
	.put(termsController.update)
	.delete(termsController.remove);

module.exports = router;
