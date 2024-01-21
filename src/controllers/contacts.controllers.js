const express = require('express');
const srvFn = require('../services/contacts.services');


const getAllContacts = async (req, res) => {
    try {
        let iData = {};
        const response = await srvFn.getContacts(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const getContactById = async (req, res) => {
    try {
        let iData = {
            _id: req.params.id
        };
        const response = await srvFn.getContact(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const createNewContact = async (req, res) => {
    try {
        let iData = req.body;
        const response = await srvFn.createContact(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const modifyContactById = async (req, res) => {
    try {
        let iData = {
            _id: req.params.id
        };
        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };
        const response = await srvFn.modifyContact(iData, user);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const deleteContactById = async (req, res) => {
    try {
        let iData = {
            _id: req.params.id
        };
        const response = await srvFn.deleteContact(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}

module.exports = {
    getAllContacts,
    getContactById,
    createNewContact,
    modifyContactById,
    deleteContactById
};