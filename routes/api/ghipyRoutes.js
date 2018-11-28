const router = require("express").Router();
const getGhipyController = require("../../controllers/ghipyController");

// // routes sends search to server
router.route("/getgihpy")
  .post(getGhipyController.getGihpy);


module.exports = router;