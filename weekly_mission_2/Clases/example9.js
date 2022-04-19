// Herencia: Nos permite relacionar clases entre si y rehusar sus componentes.

class Developer{
    constructor(name, mainLang,stack){
        this.name= name
        this.mainLang=mainLang
        this.stack=stack
    }

    get getName(){
        return this.name
    }
}

console.log("Ejemplo 9: Herencia entre dos clases")
const carloLaucnhXDev = new Developer('Carlos','js',["elixir","Groovy","Lisp"])
console.log(carloLaucnhXDev)
console.log(carloLaucnhXDev.getName)

// Se usa la palabra extends para indicar que heredaras las propiedades de la clase Padre (Developer)  en la calse definada.
// Podemos definir una clase vacia y rehusar todos los compementes de la clse padre

class LaunchXStudent extends Developer{
}

const davidStudent= new LaunchXStudent('David','JS',['HTML','CSS','JS'])
console.log(davidStudent)
console.log(davidStudent.getName)