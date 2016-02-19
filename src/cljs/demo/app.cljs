(ns demo.app)


(let [worker (js/Worker. "/demo/js/worker1.js")]
  (.addEventListener worker "message"
    (fn [msg]
      (js/console.log "main got a msg from worker" msg)))

  (.postMessage worker "hello from main"))