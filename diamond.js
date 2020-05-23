function Diamond (value) {
    this.value = value;
};

Diamond.prototype.toString = function () {
    return this.value;
};

Diamond.prototype.line = function (value) {
    return value;
};

Diamond.prototype.innerSpace = function (value) {
    var charCode = value.charCodeAt(0);
    var index = charCode - 65;
    var spaces = 2 * index - 1;
    return new Array(spaces + 1).join(' ');
};

Diamond.prototype.outerSpace = function (current, widest) {
    var currentValue = current.charCodeAt(0) - 64;
    var widestValue = widest.charCodeAt(0) - 64;

    var spaces = widestValue - currentValue;

    return new Array(spaces + 1).join(' ');
};