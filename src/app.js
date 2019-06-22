const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const indexRouter = require('./routes/route');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

const env = nunjucks.configure(path.resolve(__dirname, 'views'), {
    autoescape: true,
    express: app,
    watch: true
});

env.addGlobal('url', 'http://localhost:3000/');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, 'public', 'css')));
app.use(express.static(path.resolve(__dirname, 'public', 'img')));
app.use(express.static(path.resolve(__dirname, 'public', 'js')));
app.use(express.json());
app.use(cookieParser());
app.use(session({secret: 'krunal', saveUninitialized: false, resave: false}));

app.use('/', indexRouter);
app.set('view engine', 'njk');

app.listen(3000);

