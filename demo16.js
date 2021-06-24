// Llamar la funcion 4 veces
 // la primera vez llamarla pasandole un boolean
 // la sengunda Vez llamarla pasandole un String
 // la tercera vez llamarla  pasarle un entero
 // la cuarta vez llamarla  pasandole un objeto  con una propiedad llamda nomre y asignarle un nombre ej: {nomre:'fede'} 
 // dentro de la funcion imprimir el elemento numero cuatro del array

  var juegos=[]
  function crearJuego(juego){
juegos.push(juego)

console.log(juegos)

 }

 crearJuego(true)

 crearJuego('chapotiando en un charco')

 crearJuego(10000)
 
 crearJuego({nombre:'maximo'})

 console.log(juegos[3])