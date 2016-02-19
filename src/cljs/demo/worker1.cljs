(ns demo.worker1)


(js/self.addEventListener "message"
  (fn [msg]
    (js/console.log "web worker got message" msg)
    (js/self.postMessage "hello from worker")))

(js/console.log "started worker1")
