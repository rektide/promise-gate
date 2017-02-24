"use strict"

// default check is to look for 200 responses
function check200( response, abort){
	abort()
	return response.status>= 200&& response.status<=299
}

// Delay getting past this gate by `delayMs`
function FetchGate( url, options, check){
	options= options|| {}
	check= check|| check200
	var controller
	if( !options.method){
		options.method= "HEAD"
	}
	if( typeof(FetchController)!== "undefined"){
		controller= options.controller= new FetchController()
	}
	return fetch( url, options).then( function(response){
		function abort(){
			if( controller){
				controller.abort()
			}else{
				// crufty fallback- get a reader, cancel it asap
				response.body.getReader().then( reader=> reader.cancel())
			}
		}
		return check( response, abort)? exports.Ok: exports.NotOk
	})
}
module.exports= exports. DelayGate
exports.Noop= ()=> undefined
exports.Ok= ()=> Promise.resolve( exports.Noop())
exports.NotOk= ()=> new Promise( exports.Noop())
