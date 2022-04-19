// Ejemplo 8: Metodos static nos ayudan a escribir metodos en una clase que podemos usar si necesidad de instaciar agun objeto.

class Toolbox{
    static getMostUsefulToold(){
        return ['Command line', "Git","Text Editor"]
    }
}

console.log('Ejmeplo 8L Metodos static')
// Puedo lllmar el metodo stacit directamente con el nmombre de la clase
console.log(Toolbox.getMostUsefulToold())
// SI INTNETAMOS INSTACIAR UN OBJETO, nom podremos llmar este metodo static.
//const toolbox = new Toolbox()
// console.log(toolbox.getMostUseFulTools()) // is nor a function