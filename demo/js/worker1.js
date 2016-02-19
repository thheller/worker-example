importScripts('base.js');

self.addEventListener("message",function(a){console.log("web worker got message",a);return self.postMessage("hello from worker")});console.log("started worker1");