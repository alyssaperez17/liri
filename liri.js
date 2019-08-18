require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var Spotify = require('node-spotify-api');

var axios = require("axios");