var fs = require('fs')
    ,xml2js = require('xml2js')
    ,parser = new xml2js.Parser()
    ,mongoose = require('mongoose');

module.exports.controller = function(router) {
  router.get('/', function(req, res) {
    res.render('message/message')
  });

  router.get('/message', function(req, res) {
    var s2 = fs.readFile('./msg/messagens.xml', 'utf8', function(err,data) {
      if (err) {
        return console.log('readFile error: ' + err);
      }

      var json = parser.parseString(data, function(err,result){
        if (err) {
          return console.log('parseString error: ' + err);
        }
        //Extract the value from the data element
        var obj = JSON.stringify(result);

        return obj;
      });
    });

    res.render('message/message');
    res.json(s2);
  });
}
