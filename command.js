#!/usr/bin/env node
var start = require('./start-server.js');

var program = require('commander');

program
	.version('0.0.2')
	.option('-p, --port', 'Port - default 8080')
	.option('-P, --dir', 'Directory - default cwd')
	.parse(process.argv);

var ip = '';
require('os').networkInterfaces().en0.some( function(en) {
	if ( en.family === 'IPv4' ) {
		ip = en.address;
		return true;
	}
	return false;
} );

console.log( 'Address: ', ip + ':' + (program.port || 8080 ) );
console.log( 'Dir: ', program.dir || process.cwd() );

start( program.port, program.dir );

