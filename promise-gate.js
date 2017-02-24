"use strict"

var newApply= require( "new-apply")

function promiseGate( gate, isConstructor, ...gateArgs){
	// isConstructor is optional boolean param specifying whether the gate function is a Class constructor if true or if false regular function.
	// If value is non-boolean, it will be unshifted onto the gateArgs
	if( isConstructor!== true&& isConstructor!== false){
		gateArgs.unshift( isConstructor)
		isConstructor= false
	}
	var
	  makeGate= isConstructor? ()=> newApply.apply( gate, gateArgs): ()=> gate.apply( this, gateArgs),
	  resolveMake= resolve=> resolve( makeGate()),
	  gateRunner= ()=> new Promise(resolveMake)
	return function( fn){
		var
		  runFn= ( self, ...runArgs)=> fn.apply( self, runArgs),
		  constructFn= ( self, ...runArgs)=> newApply.apply( fn, runArgs)
		function runner( ...runArgs){
			var
			  ranGate= gateRunner(),
			  fnRunner= this instanceof runner? constructFn: runFn
			return ranGate.then( fnRunner)
		}
		return runner
	}
}

module.exports= promiseGate
