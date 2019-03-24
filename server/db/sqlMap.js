var sqlMap = {
    user: {
       add: 'insert into user_login( id, username, password) values ( 0, ?, ?)',
       select_name: 'select * from user_login',    //查询 username
       select_password: 'select * from user_login'     //查询 password
    },
    identity_verify:{
       add:'insert into identity_verify(id, address, name, phone, bank, card, type, resource) ' +
           'values(0,?,?,?,?,?,?,?)'
    }
}
module.exports = sqlMap;
