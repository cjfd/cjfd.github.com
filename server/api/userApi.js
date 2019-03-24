var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');

//连接数据库
var conn = mysql.createConnection(models.mysql);  //配置参数

conn.connect(); //连接

var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.send('err');
    } else {
        console.log(ret);
        res.send(ret);
    }
}

var dateStr = function(str) {
    return new Date(str.slice(0,7));
}


//登陆查询接口
router.post('/login', function(req,res) {
    let sql_name = $sql.user.select_name;
    // var sql_password = $sql.user.select_password;
    let params = req.body;
    // console.log(params);
    if (params.username) {
        sql_name += " where username ='"+ params.username +"'"+" and password ='"+params.password+"'";
    }
    // console.log(sql_name)
    conn.query(sql_name,function (err,rows) {
        for (var le in rows){
            console.log(rows[le].username)
            if((rows[le].username) == params.username){
                if ((rows[le].password) == params.password){
                    res.send('200');
                }else{
                    res.send('0');
                }
            }else{
                res.end('-1');
            }
        }
    })
});

//身份审核插入数据库接口
router.post('/identity_verify', function(req,res) {
   let sql= $sql.identity_verify.add;
   let params = req.body;
   console.log(params);
   let param=[params.address,params.name,params.phone,params.bank,params.card,params.type,params.resource,params.time];
   conn.query(sql,param,function (err,rows) {
       if(err){
           console.log('insert err',err.message);
           return;
       }
       console.log('insert success');
       res.send('200');
   });
});


module.exports = router;







































