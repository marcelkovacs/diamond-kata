const{Diamond} = require('./diamond');
describe("Print Diamond", function () {

    var diamond;

    beforeEach(function() {
        diamond = new Diamond('A');
    });
   
    it ("soll A zurückgeben, wenn A gegeben", function() {
        
        expect(diamond.toString()).toEqual('A');
        
    });

    describe("Line", function() {
        it("soll Zeile für A ausgeben", function() {
            expect(diamond.line('A')).toEqual('A');
        });
    });

    describe("Inner Space", function () {
        it("soll Leerzeichen ausgeben, wenn B gegeben", function() {
            expect(diamond.innerSpace('B')).toEqual(' ');
        });

        it("soll drei Leerzeichen ausgeben, wenn C gegeben", function() {
            expect(diamond.innerSpace('C')).toEqual('   ');
        });
    });
});