let calculator = {
  sum(){
    return this.a + this.b;
  },
  multiplication(){
  return this.a * this.b;
},
  minus(){
    return this.a - this.b;
  },
  
  divide(){
    return this.a / this.b;
  },
  
  read(){
  this.a = +prompt('Введите первое число', 0);
   this.b = +prompt('Введите второе число', 0);
}
}
calculator.read();
alert(calculator.sum());
alert(calculator.multiplication());
alert(calculator.minus());
alert(calculator.divide());
