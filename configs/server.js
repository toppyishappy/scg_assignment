require( '../configs/database');
var express = require('express') 
const bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');
// var upload = multer({ dest: 'public/images' });

var path = require('path');
const { setRoutes } = require( './routes' );


express.static('./')

var app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(upload.array('avatar', 12)); 
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


app.use((err, req, res, next) => {
    console.error('----------',err)
    res.status(500).send('Something broke!')
  })

// Setting up Routes
setRoutes( app );

module.exports = {app};