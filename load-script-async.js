/*
 * My implementation of async/defer script load on a page.
 * There're a lot of different solutions on the Internet but I stick with this one for now.
 */

function loadScript(src, cb, id) {
    if (window && window.document) {
        /* async isn't quite supported in IE7/8/9 */
        var isAsync = (function () {
            var version = -1;
            if (window.navigator.appName === 'Microsoft Internet Explorer') {
                var ua = navigator.userAgent;
                var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                if (re.exec(ua)) {
                    version = parseFloat(RegExp.$1);
                }
            }
            var unsupported = { 7: true, 8: true, 9: true };
            return !(version in unsupported);
        })();

        var script = window.document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';

        if (id) {
            script.setAttribute('id', id);
        }

        if (isAsync) {
            script.async = 'true';

            var callback = function () {
                var rs = this.readyState;
                if (rs && rs != 'complete' && rs != 'loaded') {
                    return;
                }
                if (cb && typeof cb === 'function') {
                    cb();
                }
            };

            if (script.addEventListener) {
                script.addEventListener('load', callback, false);
            } else if (script.readyState) {
                script.onreadystatechange = callback;
            }
        }

        var placeholder = window.document.getElementsByTagName('script')[0];
        placeholder.parentNode.insertBefore(script, placeholder);

        if (!isAsync) {
            if (cb && typeof cb === 'function') {
                cb();
            }
        }
    }
}