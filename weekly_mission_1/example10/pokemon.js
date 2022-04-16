// Crear una clase Pokemon.

export default class MyPokemon{
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

