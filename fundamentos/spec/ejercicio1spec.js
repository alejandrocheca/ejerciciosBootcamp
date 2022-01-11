
describe('Prueba ranInt(min, max)', function() {

   let min, max;

   function expectations(output){
        expect(output).toBeGeneraterThanOrEquals(min);
        expect(output).toBeLessThanOrEquals(max);
   }

   it('solo valores numericos',function(){
   
    expect(typeof intervalTest('100', -4)).toBe('number');
   });
   it('No admite min mayor que max',function(){
    min=20;
    max=10;
    expect(() =>ranInt(min, max)).toThrowError(RangeError);
   });
   it('Funciona con numeros negativos',function(){
    min=-20;
    max=-10;
    expect(() =>ranInt(min, max));
   });
   
  });