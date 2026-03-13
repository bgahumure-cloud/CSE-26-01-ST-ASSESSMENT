const express = require('express');
const router = express.Router();
const Beneficiary = require('../models/Beneficiary');

// GET all beneficiaries
router.get('/', async (req, res) => {
  try {
    const beneficiaries = await Beneficiary.find().sort({ registrationDate: -1 });
    res.json(beneficiaries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single beneficiary
router.get('/:id', async (req, res) => {
  try {
    const beneficiary = await Beneficiary.findById(req.params.id);
    if (!beneficiary) {
      return res.status(404).json({ message: 'Beneficiary not found' });
    }
    res.json(beneficiary);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create new beneficiary
router.post('/', async (req, res) => {
  try {
    const beneficiary = new Beneficiary(req.body);
    const newBeneficiary = await beneficiary.save();
    res.status(201).json(newBeneficiary);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update beneficiary
router.put('/:id', async (req, res) => {
  try {
    const beneficiary = await Beneficiary.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!beneficiary) {
      return res.status(404).json({ message: 'Beneficiary not found' });
    }
    res.json(beneficiary);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE beneficiary
router.delete('/:id', async (req, res) => {
  try {
    const beneficiary = await Beneficiary.findByIdAndDelete(req.params.id);
    if (!beneficiary) {
      return res.status(404).json({ message: 'Beneficiary not found' });
    }
    res.json({ message: 'Beneficiary deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;