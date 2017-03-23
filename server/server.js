var express = require('express');
var router1 = express.Router();
var router2 = express.Router();
var app = express();
var appStatAssets = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));

router1.get('/', function ( req, res ) {
  res.sendFile(path.join(__dirname, '../index.html'));
});
router2.get('/', function ( req,res ) {
  res.sendFile(path.join(__dirname, '../index2/index.html'));
})

app.use(router1);
app.use('/two', router2)
app.use('/three', express.static(path.join(__dirname, 'server_assets')));

app.listen(8080);
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