const express = require("express")
const {getAnalyticsByID} = require('../controller/analytics')
const router = express.Router();

router.get('/:id', getAnalyticsByID)

module.exports = router