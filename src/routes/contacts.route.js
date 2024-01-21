const express = require('express');
const router = express.Router();
const ctrlFn = require('../controllers/contacts.controllers');

router.use('/', require('./swagger'));

router.get('/', ctrlFn.getAllContacts);
router.get('/:id', ctrlFn.getContactById);
router.post('/', ctrlFn.createNewContact);
router.put('/:id', ctrlFn.modifyContactById);
router.delete('/:id', ctrlFn.deleteContactById);

module.exports = router;