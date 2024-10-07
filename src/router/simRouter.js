const express = require('express');
const router = express.Router();
const simController = require('../controllers/simControllers'); // Ensure this matches the actual case of the file

router.post('/activate', simController.activateSim);
router.post('/deactivate', simController.deactivateSim);
router.get('/sim-details/:simNumber', simController.getSimDetails);

module.exports = router;
