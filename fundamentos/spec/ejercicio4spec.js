describe('ejercicio4', () => {
    it('Números primos', () => {
        const num;
        const primos = num.length;
        let resultado = obtenerNumero(primos)
        expect(resultado.length).toBe(primos);
        for (let num=0; num<primos; num++)
            expect(resultado[i]).toBe(num[primos]);
    });
    const maxNum = 50
    function evaluarNumero(num, tipo) {
        let resultado = 0, contador = 0;
        for (let numPrimo of num) {
            contador++;
            resultado += numPrimo;
        }
        console.log(`Suma ${tipo}-> sum: ${resultado} contador: ${contador}`);
        expect(contador).toBe(maxNum);
    }
    it('Rendimiento Iterator', () => {
        let iterator = numIterator(maxNum);
        evaluarNumero(iterator, 'Iterator');
        evaluarNumero(iterator, 'Iterator');
    })
    it('Rendimiento Generator', () => {
        evaluarNumero(numGenerator(maxNum), 'Generator');
    })
});