const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

/* GET users listing. */
router.get('/', function (req, res) {
  console.log("I am here now")
  res.json({message: 'respond with a resource'});
});
router.post('/', function (req, res) {
  const { name } = req.body;
  const id = uuidv4();
  res.json({ id, name });
});
router.put('/', function (req, res) {
  res.send('respond with a resource');
});
router.delete('/', function (req, res) {
  res.send('respond with a resource');
});

module.exports = router;
