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
    if (value === "C") {
        return '   ';
    }

    return ' ';
};