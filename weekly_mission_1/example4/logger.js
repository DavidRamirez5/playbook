// CLASES Y OBJETOS.

class Logger{
    constructor(name){
        // This es una varaiable para referenciar el valor del contexto local de esta clase.
        this.name=name // Estás variables se cocnoce como atributos.
    }

    //metodo
    //this.name es la variable que se fuarda en el contexto local.
    //message es una variable que se le pasa al ejecutar este metodo.

    info(message){
        console.log(`[Objeto con nombre: ${this.name} info: ${message}]`)
    }

    // metodo 
    verbose (message){
        console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
    }
}

module.exports = Logger