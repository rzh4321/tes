var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/users', async (req, res) => {
  const a = {hi: 'hi'};
  const test = await fetch('https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images/picture-element-wide.png')
  res.send(test);
})

module.exports = router;
