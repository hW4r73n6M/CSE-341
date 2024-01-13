const express = require('express');
const router = express.Router();
const ctrlFn = require('../controllers/contacts.controllers');


router.get('/all', ctrlFn.getAllContacts);
router.get('/id/:id', ctrlFn.getContactById);
router.post('/create', ctrlFn.createNewContact);
router.put('/update', ctrlFn.modifyCurrentContact);

module.exports = router;