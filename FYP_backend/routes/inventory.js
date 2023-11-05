const express = require('express');
const { uploadCsv } = require('../controller/inventoryCtrl');
const router = express.Router();
router.post('/csv-data', uploadCsv);
module.exports = router;
