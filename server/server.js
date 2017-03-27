var express = require('express');
var router1 = express.Router();
var router2 = express.Router();
var build = express.Router();
var app = express();
// var appStatAssets = express();
var path = require('path');
var morgan = require('morgan');

// app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../')));

build.get ('/',function ( req,res ) {
  res.sendFile (path.join(__dirname, '../docs/demo.html') );
});
router1.get ( '/', function ( req, res ) {
  res.sendFile ( path.join(__dirname, '../test-directory/index.html'));
});
router2.get ( '/', function ( req,res ) {
  res.sendFile ( path.join(__dirname, '../test-directory/index2/index.html'));
});

app.use(router1);
app.use('/two', router2)

app.use('/three', express.static(path.join(__dirname, '../test-directory/server_assets')));
app.use('/build', build)

app.listen(8080, function(err){
  if(err) {
    throw err;
  }
});

/**the following routes test the service from a build folder */
// appStatAssets.use(express.static(path.join(__dirname, 'server_assets')));

// router1.get('/', function ( req, res ) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });
// router2.get('/', function ( req,res ) {
//   res.sendFile(path.join(__dirname, 'index2/index.html'));
// })

// appStatAssets.use(router1);

// appStatAssets.use('/two',router2)

// appStatAssets.listen(3000);