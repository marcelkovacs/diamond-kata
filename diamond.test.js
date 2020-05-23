describe("Print Diamond", function () {
    it ("soll A zurückgeben, wenn A gegeben", function() {
        var diamond = new Diamond('A');

        expect(diamond.toString()).toEqual('A');
    });

    describe("Line", function() {
        it("soll Zeile für A ausgeben", function() {
            var diamond = new Diamond('A');

            expect(diamond.line('A')).toEqual('A');
        });
    });
});