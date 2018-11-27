const router = require("express").Router();
const getGhipyController = require("../../controllers/ghipyController");

// // routes user info to server
router.route("/getgihpy")
  .post(getGhipyController.getGihpy);


module.exports = router;