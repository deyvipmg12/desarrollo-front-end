// POO
// polimorfismo
// herencia
// abstraccion
// encapsulamiento

class Persona {
    nombre;
    apellidos;
    constructor(txtNombre,txtApellido){
        this.nombre = txtNombre;
        this.apellidos = txtApellido;
    }
    identificar(){
        return {
            nombre: this.nombre,
            apellidos: this.apellidos
        }
    }
}
const persona = new Persona('Deyvi','Montalban')
const identificaciones = persona.identificar();
console.log(identificaciones);