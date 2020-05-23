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

Diamond.prototype.outerSpace = function () {
    return ' ';
};