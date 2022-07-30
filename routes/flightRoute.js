const express = require('express');

const router = express.Router();
const {home, getAllflights, book, getFlight, updateFlight, deleteFlight} = require('../controllers/flightController');

router.get('/', home)
router.post('/book', book)
router.get('/flights', getAllflights)
router.get('/flight/:id', getFlight)
router.put('/flight/:id', updateFlight)
router.delete('/flight/:id', deleteFlight)



module.exports = router;

