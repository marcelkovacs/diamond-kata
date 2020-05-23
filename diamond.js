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
    
    var index = this.getIndexOf(value);
    var spaces = 2 * (index - 1) - 1;
    return new Array(spaces + 1).join(' ');
};

Diamond.prototype.outerSpace = function (current, widest) {
    if (current === 'D' && widest === 'C') {
        throw new Error('Ungültige Kombination von Argumenten');
    }

    var currentValue = this.getIndexOf(current);
    var widestValue = this.getIndexOf(widest);

    var spaces = widestValue - currentValue;

    return new Array(spaces + 1).join(' ');
};

Diamond.prototype.getIndexOf = function (char) {
    if (false === /^[A-Z]$/.test(char)) {
        throw new Error('Ungültiges Argumentt');
    }
    var codeOfA = 'A'.charCodeAt(0);
    return char.charCodeAt(0) - codeOfA + 1;
};