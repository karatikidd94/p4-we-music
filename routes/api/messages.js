const express = require('express');
const router = express.Router();
const messagesCtrl = require('../../controllers/api/messages');

router.get('/', messagesCtrl.index);
router.post('/', messagesCtrl.create);
router.delete('/:id', messagesCtrl.delete);



module.exports = router;