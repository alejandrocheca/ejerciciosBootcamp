
class Calculadora {
    constructor(num1OperadoTextElement, num2OperadoTextElement) {
      this.num1OperadoTextElement = num1OperadoTextElement
      this.num2OperadoTextElement = num2OperadoTextElement
      this.limpiar()
    }
    limpiar() {
      this.num2Operado  = ''
      this.num1Operado  = ''
      this.operacion = undefined
    }
    eliminar() {
      this.num2Operado  = this.num2Operado .toString().slice(0, -1)
    }
    agregarNumero(numero) {
      if (numero === '.' && this.currentOperand.includes('.')) return
      this.num2Operado  = this.num2Operado .toString() + numero.toString()
    }
    elegirOperacion(operacion) {
      if (this.num2Operado === '') return
      if (this.num1Operado !== '') {
        this.calcular()
      }
      this.operacion = operacion
      this.num1Operado = this.num2Operado
      this.num2Operado = ''
    }
    
    calcular() {
      let calculo
      const num1 = parseFloat(this.num1Operado)
      const num2 = parseFloat(this.num2Operado)
      if (isNaN(num1) || isNaN(num2)) return
      switch (this.operacion) {
        case '+':
          calculo = num1 + num2
          break
        case '-':
          calculo = num1 - num2
          break
        case '*':
          calculo = num1 * num2
          break
        case '÷':
          calculo = num1 / num2
          break
        default:
          return
      }
      this.num2Operado = calculo
      this.operacion = undefined
      this.num1Operado = ''
    }
    
    ObtenerNumeroPantalla(numero) {
      const stringNumero = numero.toString()
      const integerDigitos = parseFloat(stringNumero.split('.')[0])
      const decimalDigitos = stringNumero.split('.')[1]
      let integerPantalla
      if (isNaN(integerDigitos)) {
        integerPantalla = ''
      } else {
        integerPantalla = integerDigitos.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigitos != null) {
        return `${integerPantalla}.${decimalDigitos}`
      } else {
        return integerPantalla
      }
    }
  
    actualizarPantalla() {
      this.num2OperadoTextElement.innerText =
        this.ObtenerNumeroPantalla(this.num2Operado)
      if (this.operacion != null) {
        this.num1OperadoTextElement.innerText =
          `${this.ObtenerNumeroPantalla(this.num1Operado)} ${this.operacion}`
      } else {
        this.num1OperadoTextElement.innerText = ''
      }
    }
  }
  
  const botonesNumericos = document.querySelectorAll('[data-number]')
  const botonesOperaciones = document.querySelectorAll('[data-operation]')
  const BotonIgual = document.querySelector('[data-equals]')
  const botonEliminar = document.querySelector('[data-delete]')
  const botonEliminarTodo = document.querySelector('[data-all-clear]')
  const num1OperadoTextElement = document.querySelector('[data-previous-operand]')
  const num2OperadoTextElement = document.querySelector('[data-current-operand]')
  
  const calculadora = new Calculadora(num1OperadoTextElement, num2OperadoTextElement)
  
  botonesNumericos.forEach(button => {
    button.addEventListener('click', () => {
      calculadora.agregarNumero(button.innerText)
      calculadora.actualizarPantalla()
    })
  })
  
  botonesOperaciones.forEach(button => {
    button.addEventListener('click', () => {
      calculadora.elegirOperacion(button.innerText)
      calculadora.actualizarPantalla()
    })
  })
  
  BotonIgual.addEventListener('click', button => {
    calculadora.calcular()
    calculadora.actualizarPantalla()
  })
  
  botonEliminarTodo.addEventListener('click', button => {
    calculadora.limpiar()
    calculadora.actualizarPantalla()
  })
  
  botonEliminar.addEventListener('click', button => {
    calculadora.eliminar()
    calculadora.actualizarPantalla()
  })
  
  document.addEventListener('keydown', function (event) {
    let patternForNumbers = /[0-9]/g;
    let patternForOperators = /[+\-*\/]/g
    if (event.key.match(patternForNumbers)) {
      event.preventDefault();
      calculadora.agregarNumero(event.key)
      calculadora.actualizarPantalla()
    }
    if (event.key === '.') {
      event.preventDefault();
      calculadora.agregarNumero(event.key)
      calculadora.actualizarPantalla()
    }
    if (event.key.match(patternForOperators)) {
      event.preventDefault();
      calculadora.chooseOperation(event.key)
      calculadora.actualizarPantalla()
    }
    if (event.key === 'Enter' || event.key === '=') {
      event.preventDefault();
      calculadora.compute()
      calculadora.actualizarPantalla()
    }
    if (event.key === "Backspace") {
      event.preventDefault();
      calculadora.delete()
      calculadora.actualizarPantalla()
    }
    if (event.key == 'Delete') {
      event.preventDefault();
      calculadora.clear()
      calculadora.actualizarPantalla()
    }
  
  });
  
  