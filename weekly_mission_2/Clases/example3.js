// Ejemplo 3: Insitanciar un objeto con atributos

class Student{
    constructor(name,age,subjects) {
        this.name= name
        this.age=age
        this.subjects=subjects
    }
}

// Crear un objeto de la clase Student (esto se le llama instaciacion)
const DavidStudent= new Student('David',23,['NodeJS','JavaScript','HTML','CSS'])
console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(DavidStudent)
console.log(`Name: ${DavidStudent.name}`)