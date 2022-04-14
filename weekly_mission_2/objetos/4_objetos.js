// Ejemplo 4: Objeto con métodos
const pet = {
    name: "Tulio",
    // Esta es una función que se guarda como propiedad
    sayHello: function(){
      // this.name hace referencia a la propiedad del objeto
      console.log(`${this.name} te saluda en español!`)
    }
  }
  
  console.log("Ejemplo 4: Objeto con métodos")
  pet.sayHello()
  
  const Jugador={
      say: () => console.log("Let's Gooo!!!")
  }

  console.log('Ejemplo 4: Jugador con métodos')
  Jugador.say()