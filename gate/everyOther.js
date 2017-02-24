"use strict"

// Only get past this gate every other time it is called
function EveryOtherGate( arg){
	if( nextOk){
		return module.exports.Ok()
	}else{
		return module.exports.NotOk()
	}
	nextOk= !nextOk
}

module.exports= EveryOtherGate
module.exports.nextOk= true
module.exports.Ok= ()=> Promise.resolve()
var noop= ()=> undefined
module.exports.NotOk= ()=> new Promise( noop)

