var async = require('async');
var fs = require('fs');
var http = require('https');
var path = require('path');
var plist = require('plist');
var season = require('season');

var URLS = [
  ('https://raw.githubusercontent.com/apiaryio/' +
   'api-blueprint-sublime-plugin/master/APIBlueprint.tmLanguage'),
  ('https://raw.githubusercontent.com/apiaryio/' +
   'api-blueprint-sublime-plugin/master/MSON.tmLanguage')
];

console.log('Downloading TextMate grammars...')
async.each(URLS, function (url, done) {
  http.get(url, function (response) {
    var data = '';

    response.on('data', function (bytes){
      data += bytes.toString();
    });

    response.on('end', function () {
      var filename, output, parsed;

      filename = path.basename(url, '.tmLanguage') + '.cson';

      console.log('Writing ' + filename + '...');
      parsed = plist.parse(data);
      // We need to escape #{ since those are string templates in Coffeescript!
      output = season.stringify(parsed).replace(/#{/gm, '[#]{');
      fs.writeFile(path.join('grammars', filename), output, done);
    });
  });
}, function (err) {
  if (err) console.log(err);
});
