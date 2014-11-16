/* jshint node:true */
"use strict";

var nodeStatic = require('node-static');

module.exports = function( port, dir ) {

	port = port || 8080;
	dir = dir || process.cwd();

	var file = new nodeStatic.Server( dir );

	require('http').createServer(function (request, response) {
	    request.addListener('end', function () {
	        file.serve(request, response);
	    }).resume();
	}).listen( port );

};

