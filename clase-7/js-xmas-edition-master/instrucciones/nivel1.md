Introducción a JavaScript intermedio.

Nivel 1 - Capturando información del usuario mediante un formulario
===================================================================

Cómo funciona un formulario?
============================
1. Un visitante entra a una página web que contiene un formulario.
2. El navegador muestra el formulario HTML.
3. El visitante llena el formulario y lo envía (submit)
4. El navegador envía esa información a un servidor web.
5. En el backend (si existe), se procesa el formulario.
    Por ejemplo, con un backend, se puede:
      - Enviar los datos del formulario por e-mail
      - Guardar los datos del formulario en una base de datos o un archivo.
6. Se envía una respuesta del servidor al cliente.


Validación de un formulario
===========================
* Validación del lado del cliente:

Las validaciones de los inputs son esenciales para cualquier formulario web ya que ayuda a que el visitante envíe los datos correctos.
Sirven tanto por una cuestión de seguridad como una cuestión de usabilidad.

Las validaciones de los formularios del lado del cliente se escriben en JavaScript. 

Validar un formulario con JavaScript nos ahorra muchas llamadas innecesarias al servidor.
Si hay errores al llenar el formulario, se previene que se mande al servidor un formulario incorrecto,
que vuelva al cliente y que detecte el error. Esto implica transferencia de datos (los archivos tienen un peso).
Por eso con JavaScript, al programar el código, hay que prever estos posibles errores. Ejemplo: En un input que pregunta el nombre, el usuario lo deja vacío. Es por esto que al escribir código, ante esta situación aparecería un mensaje de alerta que indique el error y no se envía el formulario hasta que este se llene adecuadamente. Esto le da al cliente una mayor usabilidad y evita transferecia de datos innecesarios.

También podemos validar formularios directamente con HTML, que es una funcionalidad relativamente nueva.

Más info sobre el tema en: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms
Data_form_validation

* Validación del lado del servidor:

Con validar del lado del cliente no alcanza, también hay que validar del lado del servidor. 
Esto es porque JavaScript se puede deshabilitar, o incluso pueden hacer una llamada HTTP a su servidor sin usar un navegador. 

Para validar nuestro formulario, vamos a tener  que hacer lo siguiente:
1. Obtener cada valor del formulario
2. Hacer validaciones individuales, por ejemplo:
    - no vacío
    - al menos 2 caracteres
    - máximo de 250 caracteres
    - sólo letras
    - sólo números
    - letras y números

3. Validar el formulario cuando lo queramos mandar
4. CSS:
    - Mostrar un estilo de error en los campos que tengan problemas
    - Mostrar un mensaje de error en los campos que tengan problemas

LAS VALIDACIONES DEBEN HACERSE DEL LADO DEL CLIENTE Y DEL SERVIDOR!!.

1.Obtener el valor de un formulario
===================================
    Además de `document.querySelector()`, también se puede usar el nombre del formulario para acceder a sus campos.

    **
   `const name = document.formulario.nombre.value;`

   También se puede poner de esta manera:
    document.querySelector('[name=nombre]').value
    Selecciona un elemento que tiene un atributo en particular, en CSS se pone entre corchetes.
    Se pide un elemento que tenga un atributo name con valor nombre. 
    Con el .value veo lo que se escribe en ese elemento.

    Excepciones:

    1- Radio buttons:

    Los radio buttons son botones circulares que al elegir uno, automáticamente no se pueden elegir otros (Ejmeplo: Comportamiento Muy bueno, Bueno, Mas o menos). Esto se puede hacer porque los radio buttons tienen el mismo name (Ver líneas 56 a 59 de index.html).

    Si se pidieran todos los inputs con el name comportamiento dvuelven los 3:
    document.querySelectorAll('[name=comportamiento]')
    Para ver que input está checkeado, habría que recorrer los tres. Para evitar esto se hace:

    document.querySelector('#id del formulario).nombre del elemento.value
    1- document.querySelector('#carta-a-santa').comportamiento.value
    2- document.querySelector('#carta-a-santa').nombre.value
    Da el elemento que está seleccionado. En el primer caso es el radio button y en el segundo es el lo que se escribió en el cuadro de texto donde se pone el nombre.

    Recordar que si se pone querySelector se selecciona el primer elemento con ese nomrbre y con 
    querySelectorAll se seleccionan todos.
    
    También se puede pedir de estas formas:
    document.nombre del formulario Ejemplo: document.formulario

    document.forms['id del formulario sin #] Ejemplo: document.forms['carta-a-santa']

    Entinces, al pedir un elemento caulquiera, con el .value, puedo ver que botón está seleccionado y de esta manera se checkea que lo que se ponga esté correcto.

    2- Name con -:

    En la línea 62 de index.html hay un textarea con el nombre descripcion-regalo.
    Si quiero obtener el valor de este elemento debería hacer esto: 
    const descripcionRegalo = $form.descripcion-reagalo.value;
    Pero la máquina lo leería como dercipcion - (menos, la operación aritmética) regalo. Que da error.

    La forma correcta de escribir cualquier elemento con un - es:
    const descripcionRegalo = $form['descripcion-reagalo'].value;

   TODO: Ahora crear lo mismo para las variables:
   - ciudad
   - comportamiento
   - descripcionRegalo

   const $form = document.querySelector('#carta-a-santa');
   const nombre = $form.nombre.value; //otras formas son: 
   //nombre = document.querySelector('name=nombre').value;
   //nombre = document.querySelector('#nombre').value;
   const ciudad = $form.ciudad.value;
   const comportamiento = $form.comportamiento.value;
   const descripcionRegalo = $form['descripcion-reagalo'];

   console.log(nombre);
   console.log(ciudad);
   console.log(comportamiento);
   console.log(descripcionRegalo);  
   
2.Validar que el nombre sea válido y escribir una prueba
========================================================
    
  Agregar algunas validaciones al nombre.
  - Si `nombre` está vacío, imprimir el error: 'Este campo debe tener al menos 1 caracter'
  - Si `nombre` es mayor a 50 caracteres, imprimir el error: 'Este campo debe tener menos de 50
    caracteres'

  Ver líneas 15 a 26 de main.js

  Esto se puede utilizar para una validación, pero ¿que pasa si son muchas las validaciones que hay que hacer?. Para eso se usan pruebas (ver pruebas.js)

  console.assert: Se fija que las cosas sean iguales. 
  Ejemplo: console.assert(1===1) es correcto, pero console.assert (1===2) muestra un error. Este error es inespecífico, no sabemos qué falló. para eso se agrega un mensaje que se muestra solo si lo que se iguala es incorrecto (si fuera correcto, el mensaje no aparece).

  console.assert(1===2, "1 no es igual a 2")

  Muesta el texto "1 no es igual a 2" en el error.

  function sumar(a,b) {
    return a + b
  }

  console.assert(sumar (1, 2) === 3, "la suma de 1 + 2 no dió 3")

  Esto sirve para que aparezca un mensaje si se cambia el código (En este caso cambiar sumar por restar).

  La forma de ver si funciona es haciendo el console.assert en un archivo de pruebas.js y modificando la función a la cual hace referencia (por ejemplo borrar una parte), para asegurar que los mensajes funcionan.
  Ejemplo: hacer un console.assert de validarNombre y modificar la función (ver líneas 15 a 26 de main.js).

  Las pruebas que hacen mención a una función determinada, se pueden agrupar en una función (ver líneas 1 a 18 de pruebas.js).

  Se escribe código (las pruebas) para validar el código (código creado). Esto sirve para otros y para al verlo en el futuro entender el código (Viendo las pruebas se entiende lo que hacen las funciones).

  También se debe validar lo que está bien (Happy pass), de esta manera, se hacen las pruebas de la misma forma que para detectar errores (ver líneas 29 a 33 y 49 a 52 de pruebas.js).

  A APRTIR DE AHORA GENERAR UN ARCHIVO DE PRUEBAS.JS PARA EJECUTARLAS Y AGREGARLAS AL SCRIPT DE INDEX.HTML (VER LÍNEAS 108 Y 109 DE INDEX.HTML).
  

  Ahora vamos a hacer una validación más interesante.
  Queremos que nuestro nombre contenga sólo letras.
  Pero cómo podemos validar esto? Con una herramienta que se llama Regular Expressions (Expresiones Regulares), abreviado RegEx o RegExp.
  
  Una expresión regular es un objeto que describe un patrón de caracteres.
  
  Se usan para encontrar texto, y buscar y reemplazar porciones de texto.
  Busca patrones, por ejemplo en una dirección de mail, hay caracteres (letras, números, mayúsculas, minúsculas, etc), luego un @, un ., el dominio (com) y opcionalmente otro . y otro dominio (ar).
  
  
  Las expresiones regulares se pueden volver muy complicadas, pero hoy vamos a aprender los conceptos más simples.
  
  Más info de regular expressions en `regular-expressions.txt` (falta traducir)

  Vamos a ver los métodos `test` y `match`

  ```
  console.log(/abc/.test("abcde")); //Se fija si la cadena de dexto abc existe en el texto "abcde".
    // → true
  console.log(/abc/.test("abxde")); //Se fija si la cadena de dexto abc existe en el texto "abxde".
    // → false
  ```

  Para validar que sólo tenga letras, podemos hacer:

  `const contieneSoloLetras = /^[A-z]+$/.test(valor);`

  Esto va a retornar un booleano. True si sólo contiene letras o false si no contiene sólo letras.

  / /: Adentro va la regular expression.

  ^: Comienza el test desde el inicio del texto
     Si no se pusiera, puede validar como true la parte del texto que se encuentre en cualquier lado.
     Ejemplo: /abc/.test('abcde') true, y /abc/.test('xyzabc') también da true. Si se pusiera ^, daría false.

  [A-z]+: Se aceptan caracteres desde la a a la z, y el + significa que pueden haber 1 o + caracteres.
          [A-z] acepta mayúsculas y minúsculas. [a-z] solo minúsculas y [A-Z] solo  mayúsculas.
          Si quisiera números, se pone [0-9].
          Si se pone un *, significa que puede haber 0 o más letras o números.
          Para decir cuántos caracteres quiero, se pone {1} (Entre las llaves va la cantidad).
          Si quiero un rango de números se escribe {1,3} (Entre 1 y 3 números).
  
  $: Indica el final del texto.
     Si hubieran más caracteres, da false.
     /^abc[0-9]{2,3}/.test('abc112213); da true, porque empieza con abc y sigue con números en un rango mayor a 1 pero es mayor a 3 (al no tener el $, no importa si se pasa del rango final).
     Si fuera /^abc[0-9]{2,3}$/.test('abc112213); da false porque el $ indica que luego del tercer número debe parar el test.

  Las regular expressions entienden la diferencia entre mayúsculas y minúsculas.
  Si no importara destacar la diferencia entre una y otra, se puede poner una i (incase sensitive). 
  Va luego de la regular expression /regular expression/i.test
  Ejemplo: /[a-z]+/i.test('111111AAAAaaaaaaa')

  Si quisiera testear el nombre y apellido sería de esta forma:
  /^[a-z]+ [a-z]+$/i.test(valor);
  Se agrupan dos conjuntos de caracteres, uno para el nombrey otro para el apellido, donde se indica que empieza con una letra, luego un conjunto de letras, un espacio, y finaliza con otro conjunto de letras. Se agrega la i porque en este caso, no importa la diferencia entre mayúsculas y minúsculas. 

  /[a-z0-9,\._ ]: Acepta letras y números (en una misma cadena de texto sin espacios), y siímbolos(, .  _ ) Los símbolos son comas, puntos, guíones bajos y espacios.
  En el caso del . se pone de esta manera \.

  LO QUE SE ESCRIBE DEBE SER DETECTADO EN ÓRDEN PARA QUE SE CUMPLA.

  TODO: Agregar la validación para que sólo tenga letras.  
  TODO: Escribir una prueba

3.Enviando (submit) el formulario
=================================
  
  Ahora que tenemos la validación del nombre lista, vamos a ver cómo funciona cuando mandamos un form.
 
  // Ejemplo con atributo onsubmit, onclick y directamente en JS
  
  TODO:
  1. Creemos una función llamada `validarForm` que no tome argumentos.
  2. Preguntemos por el valor de `nombre` y validémoslo llamando a la función ya existente. 
  3. Ahora hagamos un `console.log` del resultado de la ejecución de nuestra función para `validarNombre`

Si lo probás, vas a ver que no pasa nada. La razón de eso es el comportamiento por default del botón submit.
  
4.Eventos. Botón submit
=======================

El comportamiento por default del formulario cuando se envía, es que se mandara todo al servidor, cuando no existía toda la movida de JS que existe hoy, entonces nos ahorraba tiempo.

Hoy en día, tenemos que hacer unos pasos extra para evitar ese comportamiento por default. 
Por qué no se cambia? Por algo llamado backwards compatibility, o compatibilidad con versiones anteriores.

TODO original:
1. In `index.html` agregar un `event` como argumento para la función `validateForm`.
2. En el archivo de JavaScript agregar un `event` como argumento para la función `validateForm`.
3. Dentro de la función `validateForm` llama a: `event.preventDefault();`

TODO posta:

1. Agregar `event` como parámetro de la función onsubmit,
2. y hacer `event.preventDefault()`.

Y ahora debería funcionar.

EVENT BUBBLING: 
===============

PREGUNTA DE ENTREVISTA.

Cuando en html se hace click a un elemento, también se le hace a todos los elementos superiores a este.
Ejemplo: al hacer click en input de la línea 27 de index.html, también se hace al p, form, section, body y html que lo contienen.
Los eventos siempre van desde lo más específico a lo general.

Entonces cuando se hace un event.preventdefault() se evita que todos estos eventos se propaguen y se ejecuten.

5.Éxito o Errores
=================
    
  Creemos un manejador de errores que se encargue de mostrar los errores del formulario, o nos muestre un mensaje de éxito. 
  
  TODO:
  1. Crear una función `manejarErrores ` que tome 1 argumento `errores`.
  2. Agregar un chequeo en esta función que diga que si no tenemos errores, imprima 
  `console.log('éxito')` y si no, que haga un `console.log` de los errores.
  3. Reemplazar el console.log de validarNombre y en vez de eso, llamar a la función `manejarErrores`    con un array de errores.

// Acá hacemos un parate y vemos una intro a objetos.

6.Hacer validación para otros campos (con sus pruebas)
======================================================

  TODO:
  1. Obtener el valor de `ciudad` y validar que no sea vacío.
  2. Obtener el valor de `descripcion-regalo` y validar que:
  - tenga menos de 100 caracteres
  - que no esté vacío.
  - sólo tenga letras y números

  Si te acordás de lo que vimos antes, podés usar esta sintáxis:

  Se puede usar `[A-z0-9]` para validar que sólo haya letras y números.
  
  3. En `validarForm` vamos a crear un objeto que represente los errores de nuestro formulario por cada  campo.
  
  ```
  const errores = {
    name: validarNombre(nombre)
  };
  ```

  Un objeto se define entre {}, y la sintaxis es la siguiente:

  {
    llave1: valor1,
    llave2: valor2
  }

  La llave no va con comillas salvo que quiera poner una llave compuesta:
  "fecha-nacimineto": 1987-06-20,

  VER OBJETOS.TXT!!

  4. Ahora lo mismo para `ciudad` y `descripcion-regalo`

  Atención: No se olviden de la `,` para separar múltiples valores.

  ```
  const errores = {
    nombre: validarNombre(nombre),
    ciudad: validarCiudad(ciudad)
  };
  ```
   
  Ahora para ver si tenemos algún error en `handleErrors`, vamos a chequear si hay errores de manera diferente. Tenemos que iterar por cada par de llave-valor (key-value pair) del objeto de errores.
  
  5. Verificamos si hay errores con un acumulador.
  
  ```
  let cuentaErrores = 0;
  ```
  
  6. Verificamos si hay un error en `nombre`
  
  ```
  if (errores.nombre) {
    console.log(errores.nombre);
    cuentaErrores += 1;
    // ó cuentaErrores++;
    // ó cuentaErrores = cuentaErrores + 1;
  }
  ```
  
  7. Al final de la verificación, si `cuentaErrores` sigue siendo 0, no hay errores. Si es mayor a 0, hay errores.
   
  8. TODO: Hacer lo mismo con `ciudad` y `descripcion-regalo`.
  
7.Objeto, forEach, funciones de callback.
=========================================

Como vemos, es insostenible tener que agregar un chequeo por cada campo nuevo. 
Imagínense un formulario con 100 campos.

Ahora que ya está funcionando nuestro código, vamos a hacerle un refactor.
Refactor significa dejar todo funcionando como está, pero cambiando el código que corre por detrás.

El método `forEach` lo podemos ver [en MDN directamente](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

document.querySelectorAll('input').forEach(function(input){
console.log(input);
});

Agarro  todos los imput, y por cada uno de ellos, va a ejecutar una función cuyo argumento es input.
Por cada input (nombre de cada input en html, name=) que haya en el array, voy a llamar a la función como argumento de la función forEach.
Entonces se ejecuta la función (lo hace el navegador) tantas veces como elementos inputs haya (callback function).
Luego imprimo en la comsola los resultados.

Ahora le pido el valor que tiene cada input:

document.querySelectorAll('input').forEach(function(input){
console.log(input.value);
});

  TODO:
  //Explicar por qué un array no estaría tan bueno en este caso

  1. Los objetos tienen llaves (keys). Uno puede iterar por esas llaves usando forEach:
  
  ```
  Object.keys(errores).forEach(function(key) {
       console.log(errores[key]); 
       cuentaErrores = cuentaErrores + errors[key].length;
    });
  ```
  
  Ahora el código está más limpio y es más escalable y mantenible.

8.Interacción con los errores
=============================

  Ahora agreguemos un poco de interactividad a nuestra interfaz de usuario porque al momento sólo sabemos de los errores por lo que podemos ver en la consola.

  Vamos a hacer los campos que tienen errores que queden en rojo, agregándole la clase `error` que existe en `index.css`. Hace que el borde sea rojo.  
   
  TODO:
  1. Vamos a usar querySelector para agarrar al elemento que tenga el mismo nombre que cada llave del objeto que tenga errores.

  ```
  document.querySelector(`[name="${key}"]`)
  ```
  
  2. Le vamos a agregar la clase error usando `className` o `classList`
  
  3. Cada vez que haya un error, vamos a limpiar el valor del texto.
    
  4. Cuando no haya error, vamos a limpiar los errores.
  
  5. Finalmente, vamos a agregar los errores dentro del contendor `#errores` creando un <li> por cada uno.
  
  6. Podemos borrar los `console.log` que haya porque ya tenemos la funcionalidad hecha como debe ser.
  
  P.D.: Siempre es bueno limpiar los console.log del código.

9.Interactuando cuando el envío es exitoso
==========================================

  Ahora, qué pasa si todo fue bien?
   
  1. Vamos a esconder el formulario
  2. Vamos a mostrar el elemento con id `#exito` //explicar esta técnica
  
TAREA:
  3. En 5 segundos vamos redireccionar al usuario a `wishlist.html`, usando `setTimeout` y 
  `window.location.href`.


//////////////////////////////////////////////////////////////////////////////////

  Felicitaciones! Terminaste la parte 1 del taller intermedio!

//////////////////////////////////////////////////////////////////////////////////
