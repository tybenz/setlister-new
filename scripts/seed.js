#!/usr/bin/env node
var autoload = require('../src/autoload');
var Song = require('../src/models/song');
var songData = require('../../songs.json');

Promise.all(_.map(songData, function(song) {
  var songModel = new Song(song);
  return songModel.save(null,{method: 'insert'});
}))
.then(function () {
  console.log( 'done' );
})
.catch(function (err) {
  console.error( err );
});
