describe('Calculadora', () => {
   
    const num1Operado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const num2Operado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const operacion = ['+','-','x','/','='];
    let resultado;
    beforeEach(() => {
        calc = new Calculadora();        
    });
    expect(Calculadora.boton).toBe(2);
    it('Validar boton numero.', () => {

        expect(num1Operado.boton).toBe(num1Operado);
        expect(num2Operado.boton).toBe(num2Operado);
        
    });
    it('Validar boton operacion.', () => {

        expect(operacion.boton).toBe(operacion);
        
    });
    it('Operar.', () => {

        if(num1Operado.boton !=null && num2Operado.boton !=null && operacion.boton !=null){
            resultado = num1Operado.boton + operacion.boton + num2Operado.boton;
            console.log(resultado);
        }else {
            fail('Error ' + response.status + ': ' + response.statusText)
        }
    }); 
});

