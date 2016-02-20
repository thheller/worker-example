goog.provide('demo.app');
goog.require('cljs.core');
var worker_23368 = (new Worker("/demo/js/worker1.js"));
worker_23368.addEventListener("message",((function (worker_23368){
return (function (msg){
return console.log("main got a msg from worker",msg);
});})(worker_23368))
);

worker_23368.postMessage("hello from main");
//# sourceMappingURL=app.js.map?r=0.9978984850654687