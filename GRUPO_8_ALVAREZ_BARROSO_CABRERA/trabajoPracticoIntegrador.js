
/* 
1. Estructura de Datos
a) Crear un array de objetos llamado libros que contenga al menos 10
libros. Cada libro debe tener las siguientes propiedades:
✓ id (número)
✓ título (string),
✓ autor (string),
✓ año (número),
✓ género (string),
✓ disponible (booleano).
b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
Cada usuario debe tener:
✓ id (número)
✓ nombre (string)
✓ email (string)
✓ librosPrestados (array de ids de libros).*/
let libros = [{
    id: 1, 
    titulo: "como vender una casa embrujada", 
    autor: "pepe",
    anio: 2022,
    genero: "terror",
    disponible: true
},
{
    id:2, 
    titulo: "como vender una casa embrujada", 
    autor: "pepe",
    anio: 2024,
    genero: "terror",
    disponible: true
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
    email:"ninamateo@gmail.com",
    librosPrestados :"4"

},
{
    id:3,
    nombre:"rocio paez",
    email:"paezrocio@gmail.com",
    librosPrestados :"8"

},
{
    id:4,
    nombre:"milena kalas",
    email:"milenakalas@gmail.com",
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
del usuario.
b) Implementar una función devolverLibro(idLibro, idUsuario) que
marque un libro como disponible y lo elimine de la lista de libros
prestados del usuario.*/
/*5. Reportes
a) Crear una función generarReporteLibros() que utilice métodos
avanzados de arrays (.map(), .filter(), .reduce()) para generar un
reporte con la siguiente información:
✓ Cantidad total de libros.
✓ Cantidad de libros prestados.
✓ Cantidad de libros por género.
✓ Libro más antiguo y más nuevo*/
/*6. Identificación Avanzada de libros
a) Implementar una función librosConPalabrasEnTitulo() que identifique
y muestre todos los libros cuyo título contiene más de una palabra
(no títulos que contengan números ni otros caracteres).
b) La función debe devolver un array con los títulos de esos libros y
mostrarlo en la consola.*/
/*7. Cálculos Estadísticos
a) Desarrollar una función calcularEstadisticas() que utilice el objeto
Math para calcular y mostrar:
✓ Promedio de años de publicación de los libros.
✓ Año de publicación más frecuente.
✓ Diferencia en años entre el libro más antiguo y el más nuevo.
*/
function calcularEstadisticas(){
    let anioDeLibrosAcumulasdos = 0  
    for (let indiceLibros = 0 ; indiceLibros <= libros.length-1 ; indiceLibros++){
        anioDeLibrosAcumulasdos += libros[indiceLibros].anio
    } 
    console.log("promedio de año de libros " , anioDeLibrosAcumulasdos/libros.length )
    let anioMasViejo = libros[0].anio
    let anioMasNuevo = libros[0].anio
    for (let indiceLibros = 0 ; indiceLibros <= libros.length-1 ; indiceLibros++){
        anioMasViejo = Math.min(anioMasViejo, libros[indiceLibros].anio)
        anioMasNuevo = Math.max(anioMasNuevo, libros[indiceLibros].anio)
    }
console.log("el año del libro mas antiguo es: ", anioMasViejo , " y el año del libro mas nuevo es: ", anioMasNuevo);

}
calcularEstadisticas()
/*8. Manejo de Cadenas
a) Crear una función normalizarDatos() que utilice métodos de strings
para:
✓ Convertir todos los títulos a mayúsculas.
✓ Eliminar espacios en blanco al inicio y final de los nombres de
autores.
✓ Formatear los emails de los usuarios a minúsculas. */

function normalizarDatos (){
    let librosMayuscula = libros[0].titulo.toUpperCase();
    let NombresSinEspacio = usuarios[0].nombre.trimStart();
    let emailMinuscula = usuarios[0].email.toLowerCase()

console.log(librosMayuscula);
console.log(NombresSinEspacio);
console.log(emailMinuscula)

}
normalizarDatos()
/*
9. Interfaz de Usuario por Consola
a) Implementar una función menuPrincipal() que muestre un menú de
opciones al usuario y permita interactuar con el sistema utilizando
prompt().
b) El menú debe incluir opciones para todas las funcionalidades
anteriores y utilizar estructuras de control (if, switch, ciclos) para
manejar la lógica.*/
/*10. Comentando mi código
a) Se tomará como último punto a evaluar la correcta utilización de
comentarios explicando paso por paso su código.
b) Deberán seccionar el código punto por punto y con una explicación
corta y simple de que hicieron en cada punto. */