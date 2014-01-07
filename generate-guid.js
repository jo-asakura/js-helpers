/*
 * Guid generator is one of the most useful functions I use in plugins development.
 */

function generateGuid() {
    var numberGroup = function () {
        return (((1 + window.Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (numberGroup() + numberGroup() + "-" + numberGroup() + "-" + numberGroup() + "-" +
        numberGroup() + "-" + numberGroup() + numberGroup() + numberGroup());
}