const express = require("express");
const { generatePaint, singleImageDetails, generateAllPaintings } = require("../controllers/controllers.routes");
const router = express.Router();

router.get('/' , generateAllPaintings);
router.get('/:id',singleImageDetails);
router.post('/generate', generatePaint);

// router.post('/')

module.exports = router;
