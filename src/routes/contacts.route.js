const express = require('express');
const router = express.Router();
const ctrlFn = require('../controllers/contacts.controllers');
const { validateCreate } = require('../validators/contacts')

router.use('/', require('./swagger'));

router.get('/', ctrlFn.getAllContacts);
router.get('/:id', ctrlFn.getContactById);
router.post('/', validateCreate, ctrlFn.createNewContact);
router.put('/:id', ctrlFn.modifyContactById);
router.delete('/:id', ctrlFn.deleteContactById);

module.exports = router;