const express = require('express');
const router = express.Router();
const profilesCtrl = require('../../controllers/api/profiles');

router.get('/', profilesCtrl.index);
router.get('/profile', profilesCtrl.profile);
router.post('/', profilesCtrl.create);



module.exports = router;