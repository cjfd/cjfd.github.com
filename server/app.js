
const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
var proxy = require('http-proxy-middleware');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(proxy("/api/auth/login", {
    "target": "http://127.0.0.1:3000/api/",
    "secure": false,
    "logLevel": "debug",
    "pathRewrite": {
        "^/api/auth": ""
    },
    "changeOrigin": true
}))

app.use('/api/user', userApi);

app.listen(3000);
console.log('success listen at port: 3000')


