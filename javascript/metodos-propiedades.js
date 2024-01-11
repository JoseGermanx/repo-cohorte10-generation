const producto = {
  id: "12312434",
  name: "Zapatilas",
  price: 30,
  imprimir: function () {
    return "Este es el producto zapatilla";
  },
  metodo2: function () {
    return "Este es un mensaje desde el método 2"
  },
};


const id = producto.id;


function Person(arg1, arg2, arg3){ // arg1 = nombre arg2 = apellido
this.id = arg3;
this.nombre = arg1;
this.apellido = arg2;
this.nombreCompleto = function(){
return "Su nombre completo es: " + this.nombre + " " + this.apellido + "  y su id es: " + this.id
}
}

const persona1 = new Person("Jose", "Martinez", "11111111111111111111");

console.log(persona1)
