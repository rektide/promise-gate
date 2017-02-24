"use strict"

var empty= ()=> ""

// produce a functional form of x, or supply a default value
function functionize(x, defaultFn){
	if( x=== false){
		return empty
	}else if( !x){
		return defaultFn()
	}else if( typeof( x)=== "function"){
		return x
	}else{
		return ()=> x
	}
}
// run a functionalized x, and convert to string if not already
function render(x, defaultFn){
	var
	  value= functionize(x, defaultFn)(),
	  text= typeof( value)=== "string"? value: JSON.stringify( value)
	return text
}

// Prefix a log message to each run
function LoggerGate( preamble, time){
	var defaults= module.exports.defaults
	console.log( `${render(preamble, defaults.preamble)}${render(time, defaults.time)}`)
	
}
module.exports= LoggerGate
module.exports.defaults={
	preamble: ()=> "logger",
	time: ()=> process.uptime()
}
