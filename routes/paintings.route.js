const express = require("express");
const { testRoute } = require("../controllers/controllers.routes");
const router = express.Router();

router.get('/' , testRoute);
router.get('/generate')
// router.post('/')

module.exports = router;
