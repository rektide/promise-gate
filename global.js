"use strict"

var
  global= require("global"),
  promiseGate= require( ".")

function installGlobalGate( gate, isConstructor, gateArgs, name){
	var orig= global[ name]
	if( !orig){
		throw new Error( "Expected global not found: "+ name)
	}
	if( !gate){
		throw new Error( "Expected gate function")
	}
	if( typeof(gateArgs)=== "string"){
		name= gateArgs
		gateArgs= null
	}
	var args= [gate, isConstructor]
	if( gateArgs){
		args= args.concat( gateArgs)
	}
	global[ name]= promiseGate.apply(null, args)( orig)
}

module.exports= installGlobalGate
