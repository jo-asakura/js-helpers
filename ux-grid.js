/*
 * UX grid is a little useful utility. It creates grid overlay on top of your page.
 * Just copy the code below and paste it in a Web Developer's console or similar tool and run.
 */

(function (window, undefined) {
    var color75 = 'rgba(255,0,0,.75)';
    var color25 = 'rgba(255,0,0,.25)';
    var style = 'background-image: linear-gradient(transparent 99%, ' + color75 + ' 99%), linear-gradient(90deg, transparent 99%, ' + color75 + ' 99%), linear-gradient(transparent 24%, ' + color25 + ' 24%, ' + color25 + ' 25%, transparent 25%, transparent 49%, ' + color25 + ' 49%, ' + color25 + ' 50%, transparent 50%, transparent 74%, ' + color25 + ' 74%, ' + color25 + ' 75%, transparent 75%, transparent 99%, ' + color25 + ' 99%), linear-gradient(90deg, transparent 24%, ' + color25 + ' 24%, ' + color25 + ' 25%, transparent 25%, transparent 49%, ' + color25 + ' 49%, ' + color25 + ' 50%, transparent 50%, transparent 74%, ' + color25 + ' 74%, ' + color25 + ' 75%, transparent 75%, transparent 99%, ' + color25 + ' 99%); background-repeat: repeat; background-size: 100px 100px; bottom: 0; left: 0; position: fixed; right: 0; top: 0; z-index: 9999;';
    var div = window.document.createElement('div');
    div.setAttribute('id', 'ux-grid');
    div.setAttribute('style', style);
    window.document.getElementsByTagName('body')[0].appendChild(div);
})(window);