const prompt = require('prompt-sync')();

//1. Estructura de Datos
// arrays de libros y usuarios 
let libros =[{

    id: 1,                        //numero
    titulo: "la casa embrujada",  //string
    autor: "mario fortunati",     //string
    anio: 2020,                   //número
    genero: "terror",             //string
    disponible: true              //booleano

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

    id:1,                             //numero
    nombre:"georgina sanz",           //string
    email: "GEOrginasanz@gmail.com",  //string
    librosPrestados :[1]              //array de ids de libros
},
{

    id:2,
    nombre:"vanina mateo",
    email:"NINamateo@gmail.com",
    librosPrestados :[4]

},
{
    id:3,
    nombre:"rocio paez",
    email:"PAEZrocio@gmail.com",
    librosPrestados :[8]

},
{
    id:4,
    nombre:"milena kalas",
    email:"milenaAKAlas@gmail.com",
    librosPrestados :[3]

},
{
    id:5,
    nombre:"isis mora",
    email:"moraisis@gmail.com",
    librosPrestados :[9]


}]
// 2. Funciones de Gestión de Libros
// a 
function agregarLibro (id, titulo, autor, anio, genero){
    // Crea un nuevo objeto 'libro' con la información proporcionada.
    const libro = { id, titulo, autor, anio, genero, disponible:true }; // El libro se agrega como disponible por defecto (true)
    libros.push(libro); // Agrega el nuevo libro al array 'libros'.
    // imprime un mensaje en la consola con la información del libro agregado.
    console.log(`Libro agregado: ${JSON.stringify(libro)}`); // Se usa JSON.stringify para mostrar el objeto libro en formato legible
}
//agregarLibro(11, "fantasmas tecnologicos", "carlos barrios", 2024, "Fantasia");
// b    
function buscarLibro(criterio, valor) {
    // Filtra los libros que coinciden con el criterio y el valor de búsqueda.
    const resultados = libros.filter(libro => {
        // Verifica si la propiedad 'criterio' existe en el libro
        // y si su valor es igual al 'valor' de búsqueda.
        return libro[criterio] && libro[criterio] === valor; 
    });
    if (resultados.length > 0) {  // Si se encontraron libros
        console.log("Libros encontrados:", resultados);  // imprime los libros encontrados en la consola.
        return resultados;  // Devuelve el array de libros encontrados.
    } else {  // Si no se encontraron libros
        console.log(`No se encontraron libros con ${criterio}: ${valor}`); // imprime un mensaje indicando que no se encontraron libros.
        return [];  // Devuelve un array vacío.
    }
}

buscarLibro("titulo", "fantasmas vs humanos");
// c 
function ordenarLibros(criterio) {
    // Valida el criterio de ordenamiento
    if (!['titulo', 'anio'].includes(criterio)) {  // Verifica si el criterio es "titulo" o "anio"
        console.log('Criterio no válido. Use "titulo" o "anio".'); // imprime un mensaje de error si el criterio no es válido
        return; // Sale de la función si el criterio no es válido
    }
    // uso del algoritmo bubble 
    for (let i = 0; i < libros.length - 1; i++) {  // Bucle externo que recorre el array
        for (let j = 0; j < libros.length - i - 1; j++) {  // Bucle interno que compara elementos cercanos.
            if (libros[j][criterio] > libros[j + 1][criterio]) {  // Compara los libros según el criterio dado
                [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];  // Intercambia los libros si están en el orden incorrecto
            }
        }
    }
    // imprime los libros ordenados en la consola
    console.log(`Libros ordenados por ${criterio}:`, libros); 

// 3. Gestión de Usuarios
// a
function registrarUsuario(nombre, email) {
    // Crea un nuevo objeto usuario con el nombre y email proporcionados.
    const usuario = { nombre, email }; 
    // Agrega el nuevo usuario al array 'usuarios'.
    usuarios.push(usuario); 
    // imprime un mensaje en la consola con la información del usuario registrado.
    console.log(`Usuario registrado: ${JSON.stringify(usuario)}`); 
}
// b 
function mostrarTodosLosUsuarios() {
    console.log("Lista de usuarios:", usuarios);  // imprime la lista de usuarios en la consola
    return usuarios; // Devuelve el array de usuarios
}
// c
function buscarUsuario(email) {
    // Busca al usuario con el email dado.
    const usuario = usuarios.find(u => u.email === email); 

    if (usuario) { // Si se encuentra el usuario
        console.log(`Usuario encontrado: ${JSON.stringify(usuario)}`); // imprime información del usuario.
        return usuario; // Devuelve el objeto del usuario.
    } else { // Si no se encuentra
        console.log(`No se encontró un usuario con email: ${email}`); // imprime mensaje de error.
        return null; // Devuelve null.
    }
}
// d
function borrarUsuario(nombre, email) {
    // Busca el índice del usuario que coincide con el nombre y email dados.
    const indice = usuarios.findIndex(u => u.nombre === nombre && u.email === email); 

    if (indice !== -1) {  // Si se encuentra el usuario
        // Elimina el usuario del array usando splice().
        const usuarioEliminado = usuarios.splice(indice, 1); 
        // Imprime la información del usuario eliminado en la consola.
        console.log(`Usuario eliminado: ${JSON.stringify(usuarioEliminado[0])}`); 
    } else {  // Si no se encuentra el usuario imprime 
        console.log(`No se encontró un usuario con nombre: ${nombre} y email: ${email}`); 
    } 
}

// 4. Sistema de Préstamos 
// a
function prestarLibro(idLibro, idUsuario) { 
    // Utiliza el método find() para buscar el usuario y libro con el idLibro o idUsuario dados en el array.
    let libro = libros.find(libro => libro.id === idLibro); 
    let usuario = usuarios.find(usuario => usuario.id === idUsuario); 

    // Validaciones
    if (!libro) {  // Si no se encuentra ningún libro con ese ID
        return "Libro no encontrado."; // Devuelve un mensaje de error
    }
    if (!usuario) { // Si no se encuentra ningún usuario con ese ID
        return "Usuario no encontrado."; // Devuelve un mensaje de error
    }
    if (!libro.disponible) { // Si el libro no está disponible (ya está prestado)
        return "Libro no disponible."; // Devuelve un mensaje de error
    }

    // Cambia la propiedad 'disponible' del libro a false, indicando que ya no está disponible para prestar.
    libro.disponible = false; 

    // Agregar el ID del libro al array librosPrestados del usuario
    usuario.librosPrestados.push(idLibro); 
    return "Libro prestado correctamente."; // Si todas las validaciones pasan y el libro se presta correctamente, devuelve el mensaje.
}

// Solicita al usuario el ID del libro y el ID del usuario
let idLibro = parseInt(prompt("Ingrese el ID del libro a prestar: ")); 
let idUsuario = parseInt(prompt("Ingrese el ID del usuario: ")); 

// Llama a la función prestarLibro con los IDs ingresados
let resultadoPrestamo = prestarLibro(idLibro, idUsuario);  

// Imprime el resultado de la función prestarLibro
console.log(resultadoPrestamo); 

// b  
function devolverLibro(idLibro, idUsuario) {
    // Busca el libro y el usuario en los arrays con idLibro y idUsuario
    let libro = libros.find(libro => libro.id === idLibro); 
    let usuario = usuarios.find(usuario => usuario.id === idUsuario); 
  
    // Validaciones
    if (!libro) {  // Si no se encuentra el libro
      return "Libro no encontrado.";  // Devuelve un mensaje de error
    }
    if (!usuario) { // Si no se encuentra el usuario
      return "Usuario no encontrado."; // Devuelve un mensaje de error
    }
  
    // Marca el libro como disponible
    libro.disponible = true; // Cambia la propiedad 'disponible' del libro a true
  
    // Elimina el libro de la lista de libros prestados del usuario
    usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro); // Filtra el array librosPrestados del usuario para eliminar el idLibro
  
    return "Libro devuelto correctamente."; // Devuelve un mensaje de éxito
  }
  
  // Solicita al usuario el ID del libro y el ID del usuario
  idLibro = parseInt(prompt("Ingrese el ID del libro a devolver: ")); 
  idUsuario = parseInt(prompt("Ingrese el ID del usuario: "));
  
  // Llama a la función devolverLibro con los IDs ingresados
  let resultadoDeDevolucion = devolverLibro(idLibro, idUsuario); 
  
  // imprime el resultado de la función 
  console.log(resultadoDeDevolucion); 
    
      
// 5. Reportes
function generarReporteLibros() {
    // Cantidad total de libros usando metodo .length 
    let cantidadDeLibros = libros.length;
  
    // Cantidad de libros prestados usando metodo .filter
    const totalPrestados = libros.filter(libro => !libro.disponible).length;
  
    // Cantidad de libros por género usando el metodo .reduce
    const librosPorGenero = libros.reduce((acc, libro) => {
      acc[libro.genero] = (acc[libro.genero] || 0) + 1;
      return acc;
    }, {});
  
    // Libro más antiguo y más nuevo usando el metodo .reduce 
    const libroMasAntiguo = libros.reduce((min, libro) => 
        libro.anio < min.anio ? libro : min, libros[0]).titulo;
      
      const libroMasNuevo = libros.reduce((max, libro) => 
        libro.anio > max.anio ? libro : max, libros[0]).titulo;
  
    // Genera el reporte
    const reporte = {
      totalLibros: cantidadDeLibros, 
      totalPrestados: totalPrestados,
      librosPorGenero: librosPorGenero,
      libroMasAntiguo: libroMasAntiguo,
      libroMasNuevo: libroMasNuevo
    };
    //indicando que frase imprimir con cada resultado
    console.log("Cantidad total de libros:", reporte.totalLibros);
    console.log("Cantidad de libros prestados:", reporte.totalPrestados);
    console.log("Cantidad de libros por género:", reporte.librosPorGenero);
    console.log("Libro más antiguo:", reporte.libroMasAntiguo);
    console.log("Libro más nuevo:", reporte.libroMasNuevo);

    return reporte; // devuelve el reporte 
  }

  generarReporteLibros();  //Llama a la función para generar el reporte

//6. Identificación Avanzada de libros 

function librosConPalabrasEnTitulo() {
    const titulosConVariasPalabras = libros.filter(libro => { // método .filter() para crear un nuevo array que contiene solo los libros que cumplen con la condición 
        // de tener más de una palabra en el título y que esas palabras solo contengan letras.
        const palabras = libro.titulo.split(" "); //Divide el título del libro en un array de palabras
        return palabras.length > 1 && palabras.every(palabra => /^[a-zA-Z]+$/.test(palabra)); // Verifica si cada palabra en el array solo contiene letras
    }).map(libro => libro.titulo); //.map para crear un nuevo array que contiene solo los títulos de los libros filtrados.

    console.log("Títulos con varias palabras:", titulosConVariasPalabras); // Indica que imprimir 
    return titulosConVariasPalabras; // devuelve el resultado del filtro
}

librosConPalabrasEnTitulo(); // llama a la funcion finalmente

// 7. Cálculos Estadísticos

function contarAnios(anio) {
    let contador = 0; // Inicializa un contador en 0
    for (let indiceLibros = 0; indiceLibros <= libros.length - 1; indiceLibros++) { // Recorre el array 'libros'
        if (anio === libros[indiceLibros].anio) { // Si el año del libro actual coincide con el 'anio' buscado
            contador++; // Incrementa el contador
        }
    }
    return contador; // Devuelve el contador
}
function calcularEstadisticas() {
    // Calcula el promedio de los años de publicación de los libros
    let anioDeLibrosAcumulados = 0; // Inicializa una variable para acumular los años de los libros
  
    // Recorre el array de libros y sumar los años de cada libro
    for (let indiceLibros = 0; indiceLibros <= libros.length - 1; indiceLibros++) { 
      anioDeLibrosAcumulados += libros[indiceLibros].anio; 
    }
    // Calcula y muestra el promedio de los años de los libros
    console.log("Promedio de año de libros:", anioDeLibrosAcumulados / libros.length); 
  
    // Calcular el año de publicación más frecuente
    let anioMasFrecuente = 0; // Inicializa una variable para almacenar el año más frecuente
    let cantidadDeApariciones = 0; // Inicializa una variable para almacenar la cantidad de veces que aparece el año más frecuente
  
    // Recorrer el array de libros
    for (let indiceLibros = 0; indiceLibros <= libros.length - 1; indiceLibros++) {
      let anioActual = libros[indiceLibros].anio; // Obtiene el año del libro actual
      let cantidadActual = contarAnios(anioActual); // Llama a la función contarAnios para contar cuántas veces aparece ese año en el array
  
      // Si la cantidad actual es mayor que la cantidad de apariciones del año más frecuente hasta ahora
      if (cantidadActual > cantidadDeApariciones) {
        anioMasFrecuente = anioActual; // Actualiza el año más frecuente
        cantidadDeApariciones = cantidadActual; // Actualiza la cantidad de apariciones
      }
    }
    // imprime el año de publicación más frecuente
    console.log("El año de publicación más frecuente fue:", anioMasFrecuente); 
    // Calcula el año del libro más antiguo y el más nuevo. Inicializa las variables con el año del primer libro 
    let anioMasViejo = libros[0].anio; 
    let anioMasNuevo = libros[0].anio; 
    // Recorre el array de libros
    for (let indiceLibros = 0; indiceLibros <= libros.length - 1; indiceLibros++) {
      anioMasViejo = Math.min(anioMasViejo, libros[indiceLibros].anio); // Actualiza anioMasViejo si se encuentra un año menor
      anioMasNuevo = Math.max(anioMasNuevo, libros[indiceLibros].anio); // Actualiza anioMasNuevo si se encuentra un año mayor
    }
    // imprime el año del libro más antiguo y el más nuevo
    console.log("El año del libro más antiguo es:", anioMasViejo, "y el año del libro más nuevo es:", anioMasNuevo);
  }
  calcularEstadisticas(); // Llama a la función para calcular las estadísticas

// 8. Manejo de Cadenas
function normalizarDatos() {
    // Normaliza títulos de libros
    for (let indiceLibros = 0; indiceLibros <= libros.length - 1; indiceLibros++) {
      // Convierte el título del libro a mayúsculas
      let librosMayuscula = libros[indiceLibros].titulo.toUpperCase(); 
      // Elimina espacios en blanco al principio y al final del nombre del autor
      let NombresSinEspacio = libros[indiceLibros].autor.trim();  
    // imprime el título en mayúsculas y el nombre del autor sin espacios adicionales
      console.log(librosMayuscula);
      console.log(NombresSinEspacio);
    }
    // Normalizar emails de usuarios
    for (let indiceUsuarios = 0; indiceUsuarios <= usuarios.length - 1; indiceUsuarios++) {
      // Convierte el email del usuario a minúsculas
      let emailMinuscula = usuarios[indiceUsuarios].email.toLowerCase(); 
      // imprime el email en minúsculas
      console.log(emailMinuscula);
    }
  }
  normalizarDatos(); // Llamar a la función para normalizar los datos

// 9. Interfaz de Usuario por Consola
function menuPrincipal(){
    let tengoQueSalir = false; // Inicializa una variable para controlar el bucle del menú

    while(!tengoQueSalir){ // Mientras el usuario no quiera salir
        // Mostrar opciones del menú
        console.log("hola bienvenido al programa de pepichulo, esta es la lista de cosas que podes hacer: ");
        console.log('a) buscar libro');
        console.log('b) agregar libro');
        console.log('c) ordenar libros');
        console.log('d) calcular estadisticas');
        console.log('e) normalizarDatos');
        console.log('f) Salir');
        
        // Obtiene la opción elegida por el usuario
        let opcionElegida = prompt('Elegi lo que queres hacer: '); 

        // Ejecuta la acción correspondiente a la opción elegida
        switch(opcionElegida){ 
            case "a":
                prestarLibro(); // Llama a la función prestarLibro
                break;
            case "b":   // Llama a la función agregarLibro 
                break;
            case "c":
                break;
            case "d":
                calcularEstadisticas(); // Llama a la función calcularEstadisticas (asumiendo que está definida)
                break;
            case "e":
                normalizarDatos(); // Llama a la función normalizarDatos (asumiendo que está definida)
                break;
            case "f":
                tengoQueSalir = true; // Salir del bucle del menú
                break;
            default:
                console.log('opcion ingresada incorrecta, elija una de las correctas'); // imprime mensaje de error si la opción es inválida
        }

        // Pregunta al usuario si desea continuar (si no ha elegido salir)
        if (!tengoQueSalir){ 
            let continuar = prompt('Desea continuar? Si/No : '); // Obtiene la respuesta del usuario

            // Convierte la respuesta a minúsculas para comparar
            if(continuar.toLowerCase() === 'si'){ 
                tengoQueSalir = false; // Continua en el bucle del menú
            }
            else {
                tengoQueSalir = true; // Salir del bucle del menú
            }
        }
    }
    
}

menuPrincipal(); // Llamar a la función menuPrincipal para iniciar el programa
}