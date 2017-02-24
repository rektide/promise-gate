var defaulter= require("defaulter")
function setExport( moduleName){
	console.log("setting", moduleName)
	defaulter( "./"+ moduleName, module, module.exports, moduleName)
}
[
	"delay",
	"everyOther",
	"fetch",
	"logger",
	"random"
].forEach( setExport)
