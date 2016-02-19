goog.provide('demo.worker1');
goog.require('cljs.core');
var G__23370_23372 = "message";
var G__23371_23373 = ((function (G__23370_23372){
return (function (msg){
console.log("web worker got message",msg);

return self.postMessage("hello from worker");
});})(G__23370_23372))
;
self.addEventListener(G__23370_23372,G__23371_23373);
console.log("started worker1");
//# sourceMappingURL=worker1.js.map?r=0.5629661039321742