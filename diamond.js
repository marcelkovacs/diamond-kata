function Diamond (value) {
    this.value = value;
    this.codeOfA = 'A'.charCodeAt(0);
};

Diamond.prototype.toString = function () {
    var lines = this.upperHalf(this.value);
    var result = lines.join('\n');
    var lowerHalf = this.lowerHalf(lines);

    if (lowerHalf) {
        result += '\n' + lowerHalf;
    }

    return result;
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
        throw new Error('Ungültiges Argument');
    }
    var codeOfA = 'A'.charCodeAt(0);
    return char.charCodeAt(0) - codeOfA + 1;
};

Diamond.prototype.upperHalf = function (char) {
    var index = this.getIndexOf(char);
    var result = [];
    
    for (var i = 0; i < index; i++) {
        result.push(this.line(String.fromCharCode(i + this.codeOfA), char));
    }
    return result;
};

Diamond.prototype.lowerHalf = function (lines) {
    var result = [];
    
    if(lines && lines.length > 1) {
        for (var i = lines.length - 2; i >= 0; i--) {
            result.push(lines[i]);
        }
    }

    return result.join('\n')
};


module.exports = {
    Diamond
}


