# prueba-tecnica-frontend-avaluauto

## Objetivo de la prueba
Construir una aplicación de gestión de tareas (To-Do Dashboard) con interfaz responsive,  donde puedas crear, editar, eliminar, filtrar y visualizar tareas con distintas propiedades,  aplicando buenas prácticas de desarrollo frontend.

## Tabla de Contenidos  
1. [Instalación y ejecución](#instalacion-y-ejecucion)  
2. [Resumen de funcionalidades](#resumen-de-funcionalidades)  
3. [Estructura del proyecto](#estructura-del-proyecto)  
4. [Respuestas conceptuales](#respuestas-conceptuales)

## Instalación y ejecución  
### Prerrequisitos  
- Node versión 22.14.0 o superior
- npm versión 11.3.0 o superior

### Pasos  

1) Clonar el repositorio con el comando: git clone https://github.com/AndresG309/prueba-tecnica-frontend-avaluauto.git

2) Entrar en la carpeta del proyecto usando el comando: cd prueba-tecnica-frontend-avaluauto

3) Instalar dependencias con npm install

4) Ejecutar en modo desarrollo usando el comando: npm run dev

## Resumen de funcionalidades
### Almacenamiento de datos:
- Se cargan y almacenan correctamente desde el LocalStorage, cada que la lista de tareas cambia
- Por cuestiones de tiempo y disponibilidad personal no he podido implementar una conexión a Supabase, que era mi objetivo inicial.
### Manejo de las tareas:
- Se incluye un botón flotante que despliega una ventaña de tipo formulario, que recibe todas las entradas necesarias para crear una tarea. Si el campo del nombre se encuentre vacio, no permite crear la tarea.
- Para cada tarea se dispone un botón de edición que despliega la misma ventana flotante que al crear una tarea nueva, ahora adaptada para editar la información ya existente en la tarea desde la cual se usó el botón de edición.
- En la ventana de edición se pueden modificar todos los campos de información que posee la tarea (Nombre, descripción, fecha, prioridad, estado).
- Cada tarea posee también un botón de eliminar que borra completamente la tarea desde la que se accionó el botón.
- Se muestra la descripción de la tarea hasta un límite de 80 caracteres, añadiendo un botón textual para expandirla a su longitud completa. Cuando la descripción está expandida, el botón cambia su mensaje y funciona para contraer el texto nuevamente.
### Relación fecha-estado de las tareas:
- Las tareas se marcan con un borde rojo si la fecha límite ya ha pasado y aún no se completó (estado pendiente).
- Si la tarea ya se completó, se marca con un borde verde, independiende de su fecha, y si no se ha completado pero aún no llega la fecha límite, se marca con un borde azul.
- En caso que no haya fecha establecida, también se mantiene el borde azul.
### Resumen dinámico:
- Incluido en el header para facilitar el diseño y la visibilidad, se presenta un resumen que muestra el total de tareas creadas, la cantidad de tareas completas y la cantidad de tareas faltantes.
- Se incluye una barra de progreso que carga el porcentaje de tareas completadas, en relación con el total de tareas.
### Filtro de visualización:
- Se incluye una barra lateral que permite seleccionar incialmente el tipo de filtro que se quiera usar (Todos, por prioridad, o por estado)
- Según el filtro seleccionado aparecen los "sub-filtros" que tiene disponibles (Ejemplo: Para la prioridad, los sub-filtros serían bajo, medio y alto).
- Se incluye una barra de búsqueda que filtra la lista de tareas para mostrar únicamente aquellas que tengan coincidencias con el texto escrito, tanto en el nombre como en la descripción.

## Estructura del proyecto
El proyecto ha sido creado con Vite usando la plantilla de React y Javascript + SWC. La estructura de carpetas que presenta el proyecto es la siguiente:

prueba-tecnica-frontend-avaluauto

|--node_modules

|--src

|----Components

|------Filters

|------Tasks

|_

Se encuentra en la carpeta src los archivos .jsx principales (main.jsx y App.jsx) para mantener la lógica de react en un único lugar. Se encuentra una subcarpeta llamada "Components" que a su vez contiene  dos sub carpetas llamadas "Filters" y "Tasks", cada una destinada a almacenar los archivos .jsx relacionados con la utilidad que marca el nombre de la carpeta.

## Respuestas conceptuales
Segunda sección de la prueba técnica. A continuación se presenta cada pregunta y continuamente su respectiva respuesta.

**1. Explica con tus palabras cuál es la diferencia entre props y state en el framework frontend que uses.**   

Framework usado: React.
En React, las "props" es lo que comunmente en programación llamaríamos parámetros. Estos son los elementos (variables, funciones, etc) que se le pasan a un componente, para que los utilice en su lógica interna. Por otro lado, el "state" es un hook de React que permite guardar información en una variable, de manera que se pueda manipular la lógica de renderizado. Cuando una variable de estado cambia, se re-renderizarán los elementos que dependan de esa variable para presentar la información en pantalla.

En pocas palabras, los props son los datos que un componente recibe desde su padre, mientras que el state se refiere a variables que guardan el estado de información específica y controlan el renderizado de los componentes.

**2. Explica brevemente qué diferencias hay entre SSR (Server Side Rendering), CSR (Client Side Rendering) y SSG (Static Site Generation). ¿En qué casos usarías cada uno?**   

Diferencias entre SSR, CSR y SSG:

- **Server Side Rendering (SSR):** Es una técnica por la cual un servidor devuelve, a un cliente que realiza una petición, una página precargada con información ya disponible al momento de su recepción. Esta técnica la usaría en casos que sea necesario mantener un buen manejo de SEO y, el sitio pueda ser bastante pesado, o esté constantemente modificando su contenido.
- **Client Side Rendering (CSR):** Es una técnica por la cual un servidor devuelve, a un cliente que realiza una petición, una página sin contenido, que posteriormente se cargará desde el mismo cliente, debido a scripts y elementos que se crean en tiempo real. React es un ejemplo de esto. Esta técnica la usaria en casos donde sea necesario manipular información de manera muy dinámica e interactiva (Por ejemplo una red social).
- **Static Site Generation (SSG)**: Es una técnica por la cual un servidor devuelve una página previamente aplanada o comprimida en un archivo html. Esta técnica la usaría en casos donde la página contenga mayormente información que no cambia con el tiempo (como en el caso de un blog), y sea óptimo tenerla precacheada en CDNs para su rápida distribución.   

**3. ¿Por qué es importante el diseño responsive y qué estrategias sueles usar para implementarlo?**   

El diseño responsive tiene gran importancia actualmente porque el desarrollo tecnológico está resultando cada vez más en dispositivos portables que presentan formatos y tamaños distintos al de el standand en computadores. Es necesario asegurarse que los usuarios puedan recibir la información de manera correcta, sin importar el dispositivo que estén usando. Los celulares han dejado de ser un dispositivo para el ocio y se han convertido en otra herramienta de trabajo más.

La estrategia que más uso para implementarlo es usar las unidades relativas que CSS permite manejar (%, vh, vw, etc...), mezclado con reglas y cálculos que mejoren la precisión del contenido para cada caso específico (MediaQuery, calc(), etc...)   

**4. ¿Qué beneficios trae tener una buena estructura de componentes y cómo la organizas tú normalmente?**   

Una buena estructura de componentes resulta en un desarrollo más agil. Al tener todos los elementos organizados correctamente es más fácil manipularlos, realizar cambios unicamente en las partes que lo requieren, y navegar de manera sencilla por el proyecto, teniendo presente todo el tiempo dónde encontrar cada cosa.

La organización que normalmente utilizo se basa en definir el elemento o interacción de la página al que se relaciona cada componente, para posteriormente agrupar todos los componentes que compartan un mismo objetivo, en carpetas con nombres descriptivos relacionados con la interacción mayor a la que se relacionan. De ser necesario utilizo archivos de barril para facilitar los imports y exports de los componentes de cada clase (En este caso no lo he hecho). Por ejemplo, en este proyecto he agrupado todos los componentes relacionados con la manipulación y lógica de las tareas ("Tasks") en una única carpeta. He hecho lo mismo para los componentes relacionados con los filtros de busqueda.   

**5. ¿Cómo manejarías la persistencia y sincronización de datos entre el frontend y el backend en una app con usuarios reales?**   

Para mantener la sincronización de datos entre el frontend y el backend, realizaría una llamada al backend para guardar los nuevos datos cada que el usuario realiza cambios, y seguidamente, otra llamada para recuperar los datos nuevamente, que ya se habrían actualizado. Esta funcionalidad se podría adaptar a llamadas sincronas a las bases de datos, o en caso de implementar colas de guardado, se podría utilizar datos cacheados que funcionen como intermediario instantaneo para que el usuario reciba todo el tiempo la información que está o estará en la base de datos.
Para manejar datos sensibles de los usuarios, realizaría siempre peticiones al backend, no los guardaría en el frontend. En caso de necesitar comunicación en tiempo real del frontend con el backend, utilizaría el protocolo websocket.

**6. Si tuvieras que optimizar esta app con 1000 tareas, ¿qué harías para evitar re-renderizados innecesarios?**   

Utilizaría inicialmente una librería como react-window que renderiza únicamente el contenido visible. Dado que las 1000 tareas no estarán en pantalla todas al mismo tiempo, no es necesario renderizar las que no se ven. He pensado en usar React.memo para el componente Task.jsx pero debido a la naturaleza de actualización que he implementado, que con cada cambio en las tareas automáticamente actualiza toda la lista completa de tareas, no funcionaría. Sin embargo, considero que es posibe utilizar React.memo de manera exitosa si se implementara una lógica más individualista en relación al tratamiento de cada tarea creada, esto con una mejor planeación previa al desarrollo.

**7. ¿Podrías mencionar algún patrón de diseño que conozcas y explicar brevemente cómo lo aplicarías en una aplicación web?**   

Los patrones de diseño están pensados para solucionar problemas específicos en el proceso de desarrollo, por lo que su aplicación depende en gran mayoría del producto que se esté desarrollando. Realmente apenas estoy aprendiendo sobre patrones de diseño para frontend, pues hasta ahora me he enfocado más en desarrollo backend, por ende no puedo afirmar cómo los usaria en este ámbito.

En el caso de backend, el patron de diseño que más he trabajado es el MVC (Model View Controller), que me gusta mucho pues se enfoca en separar las responsabilidades de cada parte del sistema: El apartado View se encarga de la interacción con el cliente, el apartado Model se encarga de mantener los modelos y datos del sistema, y el apartado Controller se encarga de manipular la lógica interna del sistema, funcionando de intermediario entre el View y el Model, evitando accesos directos e indeseados a la información.