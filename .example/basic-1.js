#!/usr/bin/env node
"use strict"

var promiseGate= require( "..")

var
  basicGate= arg=> Promise.resolve( arg).then( arg=> console.log( "basic-gate", arg)),
  gatedUptime= promiseGate(basicGate, 42)( process.uptime),
  delay= Number.parseFloat( process.argv[2])|| process.env.WAIT_MS|| 1551.25
setTimeout( ()=> gatedUptime().then( uptime=> console.log( "basic-uptime", uptime)), delay)
