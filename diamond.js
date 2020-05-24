function Diamond (value) {
    this.value = value;
};

Diamond.prototype.toString = function () {
    return this.value;
};

Diamond.prototype.line = function (current, widest) {
    var outerSpace = this.outerSpace(current, widest);
    var innerSpace = this.innerSpace(current);

    var line = outerSpace + current;

    if (innerSpace) {
        line += innerSpace + current;
    }
    return line;
};

Diamond.prototype.innerSpace = function (value) {
    
    var index = this.getIndexOf(value);
    var spaces = 2 * (index - 1) - 1;
    return new Array(spaces + 1).join(' ');
};

Diamond.prototype.outerSpace = function (current, widest) {
    var currentValue = this.getIndexOf(current);
    var widestValue = this.getIndexOf(widest);

    if (currentValue > widestValue) {
        throw new Error('Ungültige Kombination von Argumenten')
    }

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