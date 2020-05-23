describe("Print Diamond", function () {
    it ("A zurückgeben, wenn A gegeben", function() {
        var diamond = new Diamond('A');

        expect(diamond.toString()).toEqual('A');
    });
});