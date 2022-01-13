describe('ejercicio6', () => {
    ['áéíóúüuuoiea', 'a¿¡+-^[]*!?\'"a',].forEach(caso => {
            it(`El palindromo es valido: '${caso}'`, () => {
                expect(Palindromos(caso)).toBeTrue()
            })
        });

    [1, 'no lo es', null, undefined, ' '].forEach(caso => {
        it(`El palindromo es  invalido: '${caso}'`, () => {
            expect(Palindromos(caso)).toBeFalse()
        })
    });
});

describe('Validacion mayusculas.', () => {
    ['A','HOLA MUNDO',, null, undefined, ''].forEach(caso => {
        it(`Validacion correcta de mayusculas. '${caso}'`, () => {
            expect(Mayusculas(caso)).toBeTrue()
        })
    });

    ['a', 'CASi', 'abcd'].forEach(caso => {
        it(`Validacion incorrecta de mayusculas. '${caso}'`, () => {
            expect(Mayusculas(caso)).toBeFalse()
        })
    });
});
