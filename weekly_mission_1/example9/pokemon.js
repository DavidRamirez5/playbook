// Crear una clase Pokemon.

class Pokemon{
    constructor(name){
        this.name=name;
    }

    sayHello(){
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }
    
    sayMessage(message){
        console.log( `Mi pokemon ${this.name} dice: ${message}`)
    }
}

//Probando la Clase.
// pikachu= new Pokemon('Pikachu')

// pikachu.sayHello()
// pikachu.sayMessage('Hola mundo')

module.exports = Pokemon
