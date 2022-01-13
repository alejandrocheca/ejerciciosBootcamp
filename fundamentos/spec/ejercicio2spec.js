describe(`ejercicio2`, () => {
    it('Menor Mayor Igual.', () => {
        spyOn(Math, 'random').and.returnValue(0.50);
        const promptSpy = spyOn(window, 'prompt').and.returnValues('30');
        const alertSpy = spyOn(window, 'alert').and.stub();
        numAleatorio();
        expect(promptSpy.calls.count()).toBe(3);
        expect(alertSpy.calls.count()).toBe(3);
        expect(promptSpy.calls.all()[0].args[0]).toBe('Introduce un número:');
        expect(alertSpy.calls.all()[0].args[0]).toBe('El número es mayor que el introducido. Inténtalo otra vez.');
        expect(promptSpy.calls.all()[1].args[0]).toBe('Introduce un número:');
        expect(alertSpy.calls.all()[1].args[0]).toBe('El número es menor que el introducido. Inténtalo otra vez.');
        expect(promptSpy.calls.all()[2].args[0]).toBe('Introduce un número:');
        expect(alertSpy.calls.all()[2].args[0]).toBe('Numero correcto.');
    });
    it('Comprobar numero.', () => {
        const promptSpy = spyOn(window, 'prompt').and.returnValues('3', '1', '2' );
        const alertSpy = spyOn(window, 'alert').and.stub();
        spyOn(Math, 'random').and.returnValue(0.02);
        numAleatorio();
        expect(promptSpy.calls.count()).toBe(3);
        expect(alertSpy.calls.count()).toBe(3);
        expect(alertSpy.calls.all()[0].args[0]).toBe('El número es menor que el introducido. Inténtalo otra vez..');
        expect(alertSpy.calls.all()[1].args[0]).toBe('El número es mayor que el introducido. Inténtalo otra vez.');
        expect(alertSpy.calls.all()[2].args[0]).toBe('Enhorabuena. Has acertado.');
    });
    it('Fallo', () => {
        const promptSpy = spyOn(window, 'prompt').and.returnValues(0)
        const alertSpy = spyOn(window, 'alert').and.stub()
        spyOn(Math, 'random').and.returnValue(0.02)
        numAleatorio();
        expect(promptSpy.calls.count()).toBe(10);
        expect(alertSpy.calls.count()).toBe(11);
        expect(promptSpy.calls.mostRecent().args[0]).toBe('Introduce un número:');
        expect(alertSpy.calls.mostRecent().args[0]).toBe('Has superado el número máximo de intentos. Se acabó');
    });
});
[adivinaAleatorio, numeroAleatorio].forEach(caso => {
    describe(`ejercicio2 ${caso.name}`, () => {
        let adivinaAleatorio = null;
        const respuesta = 10;
        const numAcertar = 100;
        beforeAll(() => {
            spyOn(Math, 'random').and.returnValue(0.945569);
        });
        beforeEach(() => {
            numeroAleatorio = new caso(respuesta, numAcertar);
        });
        it('Mi número es mayor.', () => {
            numeroAleatorio.comprNum(82)

            expect(numeroAleatorio.msj).toBe('Mi número es mayor.');
            expect(numeroAleatorio.intentos).toBe(1);
            expect(numeroAleatorio.numAcertado).toBeFalse();
        });
        it('Mi número es menor.', () => {
            numeroAleatorio.comprNum(84);
            numeroAleatorio.comprNum(84);
            expect(numeroAleatorio.msj).toBe('Mi número es menor.');
            expect(numeroAleatorio.intentos).toBe(2);
            expect(numeroAleatorio.numAcertado).toBeFalse();
        });
        it('Intentos', () => {
            for (let num = 1; num < respuesta; num++) {
                numeroAleatorio.comprNum(1);
                expect(numeroAleatorio.intentos).toBe(num);
            }
            numeroAleatorio.comprNum(1);
            expect(numeroAleatorio.msj).toBe('Has superado el número máximo de intentos. Se acabó');
            expect(numeroAleatorio.intentos).toBe(respuesta);
            expect(numeroAleatorio.numAcertado).toBeFalse();
        });
        it('Enhorabuena. Has acertado.', () => {
            numeroAleatorio.comprNum(50);
            expect(numeroAleatorio.msj).toBe('Enhorabuena. Has acertado.');
            expect(numeroAleatorio.numAcertado).toBeTrue();
        });
        it('Juego terminado', () => {
            for (let i = 0; i < respuesta; i++) {
                numeroAleatorio.comprNum(3);
            }
            expect(() => numeroAleatorio.comprNum(3)).toThrow();
            expect(numeroAleatorio.intentos).toBe(respuesta);
            expect(numeroAleatorio.numAcertado).toBeFalse();
        });
    })
});