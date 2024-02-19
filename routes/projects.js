var express = require('express');
var router = express.Router();

/* GET projects data  */
router.get('/', (req, res) => {
  const data = require('../public/datafiles/data.js');
  res.status(200).json(data);
});

module.exports = router;
