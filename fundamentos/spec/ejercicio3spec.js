describe('ejercicio3', () => {
    [
        {element: 5, valor: ''},
        {element: 2, valor: 0},
        {element: 1, valor: true},
        {element: 3, valor: 53 ,
        {element: 4, valor: false},  
    ].forEach(case => {
        it(`${case.element} Obtencion elemento con valor ${case.valor}`,()=>{
            let resultado = obtenerArray(case.element, case.valor);
            expect(resultado.length).toBe(case.element);
            for (let num=0; num<case.element; num++);
                expect(resultado[num]).toBe(case.valor);
        })
    });
    it('obtener número de elementos',()=>{
        const numeroelement = 5;
        let resultado = obtenerArray(numeroelement);

        expect(resultado.length).toBe(numeroelement);
        for (let num = 0; num < numeroelement; num++)
            expect(resultado[num]).toBe("");
    });
    it('obtener argumentos variables',()=>{
        const numeroelement = 5;
        let resultado = obtenerArray(numeroelement, true, 1, 2);
        expect(resultado.length).toBe(numeroelement);
        expect(resultado[0]).toBe(1);
        expect(resultado[1]).toBe(2);
        for (num=2;num<numeroelement;num++);
            expect(resultado[i]).toBe(true);
    });
});