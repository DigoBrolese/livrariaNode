const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const indexRouter = require('./routes/route');
const cookieParser = require('cookie-parser');

// Session
const session = require('express-session');
const passaport = require('passport');
const MySQLStore = require('express-mysql-session')(session);

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

// Session
const sessionStore = new MySQLStore({ user: 'root', password: '123456', database: 'eLivraria', host: 'localhost', dialect: 'mysql', });
app.use(session({ secret: 'livra', resave: false, saveUninitialized: false, store: sessionStore }));
app.use(passaport.initialize());
app.use(passaport.session());


app.use('/', indexRouter);
app.set('view engine', 'njk');

passaport.serializeUser(function (user, done) {
    done(null, user);
});

passaport.deserializeUser(function (user, done) {
    done(null, user);
});


app.listen(3000);

