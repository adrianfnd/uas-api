const router = require('express').Router();
const {
    smartphone
} = require('../controllers');

// GET localhost:8080/smartphone =› Ambil data semua smartphone
router.get('/smartphone', smartphone.getDataSmartphone);

// GET localhost:8080/smartphone/2=›Ambildatasemuasmartphoneberda
router.get('/smartphone/:id_HP', smartphone.getDataSmartphoneByID);

// POST localhost:8080/smartphone/add=›Tambahdatasmartphonekedatat
router.post('/smartphone/add', smartphone.addDataSmartphone);

// POST localhost:8080/smartphone/2=›Edit data smartphone
router.post('/smartphone/edit', smartphone.editDataSmartphone);

// POST localhost:8080/smartphone/delete=>Delete data smartphone
router.post('/smartphone/delete/', smartphone.deleteDataSmartphone);

module.exports = router;