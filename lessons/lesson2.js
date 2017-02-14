 var btn = document.getElementById('btn1');
 var onOFF = false;
var intervaltimerId;
 btn.onclick = function(event) {



    if (onOFF) {
        clearTimeout(timerId);
        clearInterval(intervaltimerId);

         onOFF = false;
     } else {
        var timerId = setTimeout(timeoutFunc, 2000);
        onOFF = true;
     }
     console.log(onOFF);
}

      function timeoutFunc() {
        intervaltimerId = setInterval(function() {
            var now = new Date();
            console.log(now);
        }, 1000);
    }
