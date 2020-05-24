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
        it("soll ' C   C' zurückgeben, wenn C und D gegeben sind", function () {
            expect(diamond.line('C', 'D')).toEqual(' C   C');
        });

        it("soll 'D     D' zurückgeben, wenn D und D gegeben sind", function () {
            expect(diamond.line('D', 'D')).toEqual('D     D');
        });

        it("soll 'A' ausgeben, wenn A und B gegeben sind", function () {
            expect(diamond.line('A', 'B')).toEqual(' A');
        });
    });

    describe("Inner Space", function () {
        it("soll Leerzeichen ausgeben, wenn B gegeben", function() {
            expect(diamond.innerSpace('B')).toEqual(' ');
        });

        it("soll drei Leerzeichen ausgeben, wenn C gegeben", function() {
            expect(diamond.innerSpace('C')).toEqual('   ');
        });

        it("soll leeren String zurückgeben, wenn A gegeben", function() {
            expect(diamond.innerSpace('A')).toEqual('');
        });
    });

    describe("Outer Space", function() {
        it("soll ein Leerzeichen voranstellen, wenn B die aktuelle Zeile ist und C die breiteste Stelle ist", function() {
            expect(diamond.outerSpace('B', 'C')).toEqual(' ');
        });

        it("soll zwei Leerzeichen voranstellen, wenn C die aktuelle Zeile ist und E die breiteste Stelle ist", function() {
            expect(diamond.outerSpace('C', 'E')).toEqual('  ');
        });

        it("soll Ausnahme auswerfen, wenn es mit D und C aufgerufen wird", function() {
            var outerSpace = diamond.outerSpace.bind(diamond, 'D', 'C');
            expect(outerSpace).toThrow('Ungültige Kombination von Argumenten');
        });
    });

    describe("Get Index Of", function() {
        it("soll 1 ausgeben, wenn A gegben ist", function() {
            expect(diamond.getIndexOf('A')).toEqual(1);
        });

        it("soll Ausnahme werfen, wenn 4 gegeben ist", function() {
            var getIndexOf = diamond.getIndexOf.bind(diamond, 4);

            expect(getIndexOf).toThrow('Ungültiges Argument');
        });
    });

    describe("Obere Hälfte", function() {
        it("soll ' A\nB B' ausgeben, wenn B die breiteste Stelle ist", function() {
            expect(diamond.upperHalf('B')).toEqual(' A\nB B');
        });
    });
});