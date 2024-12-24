const prompt = require('prompt-sync')();

//1. Estructura de Datos*/

let libros =[{

    id: 1, 
    titulo: "la casa embrujada", 
    autor: "mario fortunati",
    anio: 2020,
    genero: "terror",
    disponible: true

},
{
id:2, 
titulo: "como vender una casa embrujada", 
autor: "mario fortunati ",
anio: 2021,
genero: "terror",
disponible: true

},
{
id:3,
 titulo: "¿la casa sin fantasmas?", 
autor: "mario fortunati ",
anio: 2022,
genero: "terror",
disponible: true
},
{  id:4,
titulo: "¿se vendio la casa?", 
autor: "mario fortunati ",
anio: 2023,
genero: "terror",
disponible: true
},
{
id:5,
titulo: "los fantasmas", 
autor: "marco soldi",
anio: 2020,
genero: "suspenso",
disponible: true
},
{
id:6,
titulo: "cazafantasmas", 
autor: "marco soldi",
anio: 2021,
genero: "suspenso",
disponible: true
},
{

id:7,
titulo: "la familia fantasma", 
autor: "marco soldi",
 anio: 2022,
genero: "suspenso",
disponible: true
},
{
id:8,
titulo: "fantasmas en la ciudad", 
autor: "marco soldi",
anio: 2023,
genero: "suspenso",
disponible: true
},
{
id:10,
titulo: "fantasmas vs humanos", 
autor: "marco soldi",
anio: 2023,
genero: "suspenso",
disponible:true
}]
let usuarios =[{

    id:1,
    nombre:"georgina sanz",
    email: "GEOrginasanz@gmail.com",
    librosPrestados :"1"
},
{

    id:2,
    nombre:"vanina mateo",
    email:"NINamateo@gmail.com",
    librosPrestados :"4"

},
{
    id:3,
    nombre:"rocio paez",
    email:"PAEZrocio@gmail.com",
    librosPrestados :"8"

},
{
    id:4,
    nombre:"milena kalas",
    email:"milenaAKAlas@gmail.com",
    librosPrestados :"3"

},
{
    id:5,
    nombre:"isis mora",
    email:"moraisis@gmail.com",
    librosPrestados :"9"


}]
/*2. Funciones de Gestión de Libros
a) Implementar una función agregarLibro(id, titulo, autor, anio, genero)
que agregue un nuevo libro al array libros.
b) Crear una función buscarLibro(criterio, valor) que permita buscar
libros por título, autor o género utilizando el algoritmo de búsqueda
lineal.
c) Desarrollar una función ordenarLibros(criterio) que ordene los libros
por título o año utilizando el algoritmo de ordenamiento burbuja
(bubble sort) y luego muestre los libros ordenados en la consola.
d) Desarrollar una función borrarLibro(id) que elimine el libro que se le
pase por parámetro.*/
/*3. Gestión de Usuarios
a) Implementar una función registrarUsuario(nombre, email) que
agregue un nuevo usuario al array usuarios.
b) Implementar una función mostrarTodosLosUsuarios() que me
devuelva el array completo de usuarios
c) Crear una función buscarUsuario(email) que devuelva la información
de un usuario dado su email.
d) Implementar una función borrarUsuario(nombre, email) que elimine el
usuario seleccionado.*/
/*4. Sistema de Préstamos
a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque
un libro como no disponible y lo agregue a la lista de libros prestados
del usuario
b) Implementar una función devolverLibro(idLibro, idUsuario) que
marque un libro como disponible y lo elimine de la lista de libros
prestados del usuario.*/
function prestarLibro(libros, usuarios) {

    let libro = libros.find(libro => libros.id === libros);
    let usuario = usuarios.find(usuario => usuarios.id === usuarios);

    if (!libro) {
        return "Libro no encontrado.";
    }
    if (!usuario) {
        return "Usuario no encontrado.";
    }
    if (!libro.disponible) {
        return "Libro no disponible.";
    }

    libro.disponible = false;
    usuario.librosPrestados.push(librosibro);
    return "Libro prestado correctamente.";
}

console.log(prestarLibro(1, 2)); 
console.log(libros);
console.log(usuarios);
    
      

// Reportes

function contarAnios(anio){
    let contador = 0
    for (let indiceLibros = 0 ;indiceLibros <= libros.length -1 ; indiceLibros ++){
        if (anio === libros[indiceLibros].anio){
            contador++
        }
    }
return contador 
}
function calcularEstadisticas(){

    let anioDeLibrosAcumulasdos = 0 
     
    for (let indiceLibros = 0 ; indiceLibros <= libros.length-1 ; indiceLibros++){
        anioDeLibrosAcumulasdos += libros[indiceLibros].anio
    }
    console.log("promedio de año de libros " , anioDeLibrosAcumulasdos/libros.length )

    let anioMasFrecuente = 0
    let cantidadDeApariciones = 0

    for (let indiceLibros = 0 ; indiceLibros <= libros.length-1 ; indiceLibros++){
       let anioActual = libros[indiceLibros].anio
       let cantidadActual = contarAnios(anioActual)
       if (cantidadActual > cantidadDeApariciones){
        anioMasFrecuente = anioActual 
        cantidadDeApariciones = cantidadActual
       }
    } 
    console.log("el año de publicacion mas frecuente fue  " , anioMasFrecuente )
    let anioMasViejo = libros[0].anio
    let anioMasNuevo = libros[0].anio
    for (let indiceLibros = 0 ; indiceLibros <= libros.length-1 ; indiceLibros++){
        anioMasViejo = Math.min(anioMasViejo, libros[indiceLibros].anio)
        anioMasNuevo = Math.max(anioMasNuevo, libros[indiceLibros].anio)
    }
    console.log("el año del libro mas antiguo es: ", anioMasViejo , " y el año del libro mas nuevo es: ", anioMasNuevo);

}
calcularEstadisticas()

//8. Manejo de Cadenas
function normalizarDatos (){
        for (let indiceLibros = 0; indiceLibros <= libros.length -1; indiceLibros++) {
            let librosMayuscula = libros[indiceLibros].titulo.toUpperCase();
            let NombresSinEspacio = libros[indiceLibros].autor.trim();
            console.log(librosMayuscula);
            console.log(NombresSinEspacio);   console.log(emailMinuscula);
        }
        for (let indiceLibros = 0; indiceLibros <= libros.length -1; indiceLibros++){
            let emailMinuscula = usuarios[indiceUsuarios].email.toLowerCase();
            console.log(emailMinuscula);
        } 
}
normalizarDatos()

//9. Interfaz de Usuario por Consola
function menuPrincipal(){
    let tengoQueSalir = false

    while(!tengoQueSalir){
        console.log("hola bienvenido al programa de pepichulo, esta es la lista de cosas que podes hacer: ")
        console.log('a) buscar libro')
        console.log('b) agregar libro')
        console.log('c) ordenar libros')
        console.log('d) calcular estadisticas')
        console.log('e) normalizarDatos')
        console.log('f) Salir')
        
        let opcionElegida = prompt('Elegi lo que queres hacer: ');

        switch(opcionElegida){
            case "a":
                prestarLibro();
                break;
            case "b":
                //agregarLibro()
                break;
            case "c":
                break;
            case "d":
                calcularEstadisticas()
                break;
            case "e":
                normalizarDatos();
                break;
            case "f":
                tengoQueSalir = true;
                break;
            default:
                console.log('opcion ingresada incorrecta, elija una de las correctas')
        }

        if (!tengoQueSalir){
            let continuar = prompt('Desea continuar? Si/No : ');

            if(continuar.toLowerCase() === 'si'){
                tengoQueSalir = false;
            }
            else
            {
                tengoQueSalir = true;
            }
        }
    }
    
}
menuPrincipal()
/*10. Comentando mi código
a) Se tomará como último punto a evaluar la correcta utilización de
comentarios explicando paso por paso su código.
b) Deberán seccionar el código punto por punto y con una explicación
corta y simple de que hicieron en cada punto. */
