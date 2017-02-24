"use strict"

// Get past this gate with `probability` change
function RandomGate( probability){
	if( !probability){
		probability= 0.5
	}
	return Math.random()> probability? module.exports.Ok: module.exports.NotOk
}
module.exports= RandomGate
module.exports.Ok= ()=> Promise.resolve()
var noop= ()=> undefined
module.exports.NotOk= ()=> new Promise( noop)

