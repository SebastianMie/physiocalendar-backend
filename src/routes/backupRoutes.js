const express = require('express');
const { getBackup, saveBackup } = require('../controllers/backupController');

const router = express.Router();

router.get('/backup', getBackup);
router.put('/backup', saveBackup);

module.exports = router;
