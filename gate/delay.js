"use strict"

// make a function that will callback it's lone `done` param after `delayMs`
var delay= delayMs=> done=> setTimeout( done, delayMs)

// Delay getting past this gate by `delayMs`
function DelayGate( delayMs){
	return new Promise( delay(delayMs))
}
module.exports= DelayGate

