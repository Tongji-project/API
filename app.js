var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var async = require('async');

var app = express();
app.use(bodyParser.json())


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/location';
var connection;
MongoClient.connect(url, function(err, db) {
                connection = db;
                }); 

var insertQueue = async.queue(function (task, callback) {
    connection.collection(task.collection).insertOne(task.document, function(err, result) {
    if(err){
        console.log('inser failed in ' + collection )
        callback();
        return;
    }
    console.log("Inserted a document into the " + task.collection + " collection.");
    callback();
  });
}, 40)

var queryData = function(collection, callback) {
   connection.collection(collection).find({}).toArray(function (err, results) {
       callback(results);
   })
};

app.post('/record', function (req, res) {    
    insertQueue.push({'collection': 'record', 'document': req.body}, function (err) {
        if(err) res.send({'result': 'failed'})
        else res.send({'result':'succuss'})
    })
})


app.get('/records', function (req, res) {
  queryData('record', function(results) {
      res.send(results)
  });
})

app.post('/records', function (req, res) {
    req.body.forEach(function (elem) {
        insertQueue.push({'collection': 'record', 'document': elem});
    });
    res.send({'result':'succuss'})
})

app.post('/device', function (req, res) {    
    insertQueue.push({'collection': 'device', 'document': req.body}, function (err) {
        if(err) res.send({'result': 'failed'})
        else res.send({'result':'succuss'})
    })
})

app.get('/devices', function (req, res) {
  queryData('device', function(results) {
      res.send(results)
  });
})

var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
})


// var express = require('express')
// var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })

// var app = express()

// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
//   console.log(req.file)
//   console.log('body:', req.body);
//   res.send('123')
// })

// app.listen(3000);

