const express = require('express');
const srvFn = require('../services/professionals.services');


const getAllProfessionals = async (req, res) => {
    try {
        let iData = {};
        const response = await srvFn.getProfessionals(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const getProfessionalById = async (req, res) => {
    try {
        let iData = {
            _id: req.params.id
        };
        const response = await srvFn.getProfessional(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const createNewProfessional = async (req, res) => {
    try {
        let iData = req.body;
        const response = await srvFn.createProfessional(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const modifyCurrentProfessional = async (req, res) => {
    try {
        let iData = req.body;
        const response = await srvFn.modifyProfessional(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}

module.exports = {
    getAllProfessionals,
    getProfessionalById,
    createNewProfessional,
    modifyCurrentProfessional
};