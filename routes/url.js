const express = require("express")
const {generateNewShortUrl, getTheUrl} = require('../controller/url')
const router = express.Router();
router.post('/',
 generateNewShortUrl
);

router.get('/:id', getTheUrl);

module.exports = router;