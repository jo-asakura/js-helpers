/*
 * Deep copy implementation is not as hard as you might think.
 */

function deepCopy(obj) {
    return window.JSON.parse(window.JSON.stringify(obj) || 'null');
}