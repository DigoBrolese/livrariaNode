const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');

const indexRouter = require('./routes/route');

const app = express();

nunjucks.configure(path.resolve(__dirname, 'views'), {
    autoescape: true,
    express: app,
    watch: true
});

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, 'public', 'css')));
app.use(express.static(path.resolve(__dirname, 'public', 'img')));
app.use(express.static(path.resolve(__dirname, 'public', 'js')));

app.use('/', indexRouter);
app.set('view engine', 'njk');

app.listen(3000);