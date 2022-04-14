// Ejemplo 3: Objeto con diferentes porpiedases.

const myObject3 = {
    name: "Tulio",
    age: 2,
    nicknames: [
     "Tulipan",
      "Tulancingo",
      "Tulish"
    ],
    address: {
      zip_code: "10000",
      street: "Dr. Vertiz 11 Benito Juarez",
      city: "CDMX"
    }
  }
  console.log("Ejemplo 3: Objeto con diferentes propiedades")
  console.log(myObject3)
  console.log(myObject3.name)
  console.log(myObject3["address"])
  
// Otro objeto con diferentes porpiedades.

const Equipo={
    league:'NFL',
    name:'New England-Patriots',
    players:{
        offense:{
            WR:['Nelson Agholor','Devante Parker','Jakobi Meyers','Kendrick Bourne'],
            QB:['Mac Jones','Brian Hoyer','Jarrett Stidham'],
            RB:['Damien Harris','Rhamondre Stevenson', 'J.J Taylor']
        },
        Defense:{
            LB:['Mathew Judon', 'Josh Uche', 'Hervey Lang'],
            S:['Adrian Phillips','Devin McCourty','Justin Bethel']
        }
    }
}

console.log('Objeto de Equipo de Futbol Americano')
console.log(Equipo)
console.log(Equipo.name)
console.log(Equipo.players.offense.QB[0])