var activityEvents=["mousedown","mousemove","keydown","scroll","touchstart","click","keypress","touchmove"];activityEvents.forEach(function(t){window.addEventListener(t,functionCustomJS,!1)});let flag=!1;function functionCustomJS(){function t(){setTimeout(function(){if(!o){o=!0;var e=document.getElementsByTagName("script");for(let t=0;t<e.length;t++)null!==e[t].getAttribute("data-src-content")&&(e[t].setAttribute("src",e[t].getAttribute("data-src-content")),delete e[t].dataset.srcContent);var n=document.getElementsByTagName("link");for(let t=0;t<n.length;t++)null!==n[t].getAttribute("data-href-content")&&(n[t].setAttribute("href",n[t].getAttribute("data-href-content")),delete n[t].dataset.hrefContent);setTimeout(function(){document.dispatchEvent(new CustomEvent("StartAsyncLoading")),document.dispatchEvent(new CustomEvent("StartKernelLoading"))},400)}},3e3)}function e(){if(!o){o=!0;var e=document.getElementsByTagName("script");for(let t=0;t<e.length;t++)null!==e[t].getAttribute("data-src-content")&&(e[t].setAttribute("src",e[t].getAttribute("data-src-content")),delete e[t].dataset.srcContent);var n=document.getElementsByTagName("link");for(let t=0;t<n.length;t++)null!==n[t].getAttribute("data-href-content")&&(n[t].setAttribute("href",n[t].getAttribute("data-href-content")),delete n[t].dataset.hrefContent);setTimeout(function(){document.dispatchEvent(new CustomEvent("StartAsyncLoading")),document.dispatchEvent(new CustomEvent("StartKernelLoading"))},400)}}var o;0==flag&&(o=!(flag=!0),["mousedown","mousemove","keydown","scroll","touchstart","click","keypress","touchmove"].forEach(function(t){window.addEventListener(t,e,!1)}),document.addEventListener("load",t,!1),document.addEventListener("onload",t,!1),null!=window.addEventListener?window.addEventListener("load",t,!1):null!=window.attachEvent?window.attachEvent("onload",t):window.onload=t)}