var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/reg', function(req, res, next) {
  res.render('user/reg',{});
});

router.post('/reg', function(req, res, next) {
    var user =  req.body;//读取用户提交过来的注册表单
    new Model('User')(user).save(function(err,user){
        if(err){
            res.redirect('/users/reg');
        }else{
            res.redirect('/users/login');
        }
    });

});

router.get('/login', function(req, res, next) {
  res.render('user/login',{});
});
router.get('/login_success', function(req, res, next) {
    console.log(1);
    res.render('user/login_success',{});
});

router.post('/login', function (req, res) {
    var user = req.body;
    Model('User').findOne(user,function(err,user){
        if(err){
            console.error(err);
            return res.redirect('/users/login');
        }
        res.redirect('/users/login_success');//注册成功后返回主页
    });
});

/*router.post('/login', function(req, res, next) {
  res.send('注册');
});*/

router.get('/logout', function(req, res, next) {
  res.send('退出');
});
//router.all

module.exports = router;
