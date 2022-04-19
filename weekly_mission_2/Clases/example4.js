// Ejemplo 4: Métodos en los objetos

class Repository{
    constructor(name,author,language,stars){
        this.name= name
        this.author=author
        this.language=language
        this.stars=stars
    }

    getInfo(){ // Es una función que ejecutara cualquier objeto instancioado de esta clase.
        return `Repository ${this.name} has ${this.stars} stars`
    }
}

console.log("Ejemplo 4: Métodos en los objetos")
const myRepo = new Repository("LaunchX","carlogilmar",'js',100)
console.log(myRepo.getInfo())