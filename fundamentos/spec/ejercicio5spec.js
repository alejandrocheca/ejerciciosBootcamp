describe('ejercicio5', () => {
    ['64927364p', '64927364P'].forEach(caso => {
        it(`El NIF introducido es correcto: '${caso}'`, () => {
            expect(validarNIF(caso)).toBeTrue()
        })
    });

    ['64927364', 'P', null, undefined, ''].forEach(caso => {
        it(`Error NIF, la letra o numero del NIF no se corresponde. '${caso}'`, () => {
            expect(validarNIF(caso)).toBeFalse()
        })
    });
    ['64927364', null, undefined, ''].forEach(caso => {
        it(`Error NIF, formato no válido. '${caso}'`, () => {
            expect(validarNIF(caso)).toBeFalse()
        })
    });
    
});