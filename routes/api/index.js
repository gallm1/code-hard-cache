const router = require("express").Router();
const termRoutes = require("./terms");

router.use("/terms", termRoutes);

module.exports = router;