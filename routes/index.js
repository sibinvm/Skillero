var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Skillero | Skill Share Platform', text: '' });
});


router.get('/teaching', (req, res) => {
  res.render('teaching', { title: "Skillero | You Can Teach" });
});

router.get('/teachers-register-form', (req, res) => {
  res.render('teachers-register-form', { title: "Skillero | Registration form for Teachers" });
});

router.get('/learners-page', (req, res) => {
  res.render('learners-page', { title: "Skillero | Learners" });
});

router.get('/online-payment', (req, res) => {
  res.render('online-payment', { title: "Skillero | Online payment" });
});

module.exports = router;
