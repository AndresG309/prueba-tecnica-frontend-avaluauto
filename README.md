# prueba-tecnica-frontend-avaluauto

## Objetivo de la prueba
Construir una aplicación de gestión de tareas (To-Do Dashboard) con interfaz responsive,  donde puedas crear, editar, eliminar, filtrar y visualizar tareas con distintas propiedades,  aplicando buenas prácticas de desarrollo frontend.

## Tabla de Contenidos  
1. [Instalación y ejecución](#instalación-y-ejecución)  
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
1) Almacenamiento de datos: Los datos se cargan y almacenan de manera correcta desde el LocalStorage, cada que la lista de tareas cambia (Por cuestiones de tiempo y disponibilidad personal no pude implementar SupaBase, disculpen).
2) Manejo de las tareas: Se incluye un botón flotante que despliega una ventaña de tipo formulario, que es la que recibe todas las entradas necesarias para crear una tarea. Esta ventana incluye un botón que crea la tarea con la información que se introdujo en los campos. Para cada tarea se dispone un botón de edición que despliega la misma ventana flotante que al crear una tarea nueva, pero esta vez adaptada para que permita editar la información ya existente en la tarea desde la cual se usó el botón de edición. En la ventana de edición se pueden modificar todos los campos de información que posee la tarea (Nombre, descripción, fecha, prioridad, estado). Cada tarea posee también un botón de eliminar que borra completamente la tarea desde la que se accionó el botón. 2.1) Descripción de las tareas: Se muestra la descripción hasta un límite de 80 caracteres, añadiendo un botón textual para expandirla a su longitud completa. Cuando la descripción está expandida, el botón cambia su mensaje y funciona para contraer el texto nuevamente.
3) Relación fecha-estado de las tareas: Las tareas se marcan con un borde rojo si la fecha límite ya ha pasado y aún no se completó (estado pendiente). Si la tarea ya se completó, se marca con un borde verde, independiende de su fecha, y si no se ha completado pero aún no llega la fecha límite, se marca con un borde azul. En caso que no haya fecha establecida, también se mantiene el borde azul.
4) Resumen dinámico: Incluido en el header para facilitar el diseño y la visibilidad, se presenta un resumen que muestra el total de tareas creadas, la cantidad de tareas completas y la cantidad de tareas faltantes. Debajo de estos datos se incluye una barra de progreso que carga el porcentaje de tareas completadas, en relación con el total de tareas.
5) Filtro de tareas: Se incluye una barra lateral que permite seleccionar incialmente el tipo de filtro que se quiera usar (Todos, por prioridad, o por estado) y posteriormente aparecen los "sub-filtros" que están disponibles para ese tipo de filtro anteriormente seleccionado (En el caso de prioridad, los sub-filtros serían bajo, medio y alto). Adicionalmente se incluye una barra de búsqueda que filtra la lista de tareas para msotrar únicamente aquellas que tengan coincidencias con el texto escrito, tanto en el nombre como en la descripción.

## Estructura del proyecto
El proyecto ha sido creado con Vite usando la plantilla de React y Javascript + SWC. La estructura de carpetas que presenta el proyecto es la siguiente:

prueba-tecnica-frontend-avaluauto

|--node_modules

|--src

|----Components

|------Filters

|------Tasks

|_

Se encuentra en la carpeta src los archivos .jsx principales (main.jsx y App.jsx) para mantener la lógica de react en un único lugar. Se encuentra una subcarpeta llamada "Components" que a su vez contiene  dos sub carpetas llamadas "Filters" y "Tasks", cada una destinada a almacenar los archivos .jsx relacionados con la ultilidad que marca el nombre de la carpeta.

## Respuestas conceptuales
Segunda sección de la prueba técnica. A continuación se presenta cada pregunta y continuamente su respectiva respuesta.

- 1. Explica con tus palabras cuál es la diferencia entre props y state en el framework 
frontend que uses. 

R// 

- 2. Explica brevemente qué diferencias hay entre SSR (Server Side Rendering), CSR 
(Client Side Rendering) y SSG (Static Site Generation). 
¿En qué casos usarías cada uno?

R// 

- 3. ¿Por qué es importante el diseño responsive y qué estrategias sueles usar para 
implementarlo?

R// 

- 4. ¿Qué beneficios trae tener una buena estructura de componentes y cómo la organizas 
tú normalmente?

R// 

- 5. ¿Cómo manejarías la persistencia y sincronización de datos entre el frontend y el 
backend en una app con usuarios reales?

R// 

- 6. Si tuvieras que optimizar esta app con 1000 tareas, ¿qué harías para evitar 
re-renderizados innecesarios?

R// 

- 7. ¿Podrías mencionar algún patrón de diseño que conozcas y explicar brevemente cómo 
lo aplicarías en una aplicación web?


R// 
