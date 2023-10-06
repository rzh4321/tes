var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/users', (req, res) => {
  const a = {hi: 'hi'};
  res.json(a);
})

module.exports = router;
