# BookingEvents

Este proyecto es una aplicación web para la gestión de eventos. Los usuarios pueden ver una lista de eventos y obtener información detallada sobre ellos, incluyendo fechas, lugares, horarios y disponibilidad de entradas para cada sesión del evento. También pueden comprar entradas para una sesión en particular.

## Tecnologías utilizadas

La aplicación está desarrollada con Angular, una plataforma de desarrollo de aplicaciones web basada en TypeScript. La aplicación también utiliza Bootstrap para la gestión del diseño y estilo de la página,  y se comunica con un servidor RESTful a través de HTTP para obtener información, utilizando archivos JSON como base de datos.

## Estructura del proyecto

El proyecto está dividido en varios componentes principales, que son los siguientes:

### EventsListComponent

Este componente muestra una lista de eventos disponibles y permite a los usuarios seleccionar uno para ver detalles adicionales.

### EventDetailComponent

Este componente muestra detalles adicionales sobre un evento seleccionado, incluyendo las sesiones disponibles, el precio de las entradas y la capacidad de cada sesión.

### SessionListComponent

Este componente muestra una lista de sesiones disponibles para un evento seleccionado y permite a los usuarios seleccionar una sesión para comprar entradas.

### EventsService

Este servicio se utiliza para recuperar y actualizar la información de los eventos y las sesiones, se comunica con un servidor RESTful a través de HTTP para obtener  información, utilizando archivos JSON como base de datos.

## Funcionamiento

Cuando un usuario accede a la página, se carga la lista de eventos disponibles en el componente EventsListComponent. Al seleccionar un evento en particular, se muestra el EventDetailComponent, que proporciona detalles adicionales sobre el evento y una lista de sesiones disponibles. El usuario puede seleccionar una sesión en particular para comprar entradas, lo que muestra el componente PurchaseComponent. Después de completar el formulario, se actualiza la disponibilidad de entradas para la sesión seleccionada y se muestra un mensaje de confirmación al usuario.

## Instalación y configuración

Para ejecutar el proyecto en su máquina local, siga estos pasos:

1. Descargue el repositorio desde Github.
2. Abra la carpeta del proyecto en su editor de código favorito.
3. Abra una terminal en la carpeta del proyecto y ejecute el comando npm install para instalar todas las dependencias necesarias.
4. Ejecute el comando ng serve para compilar y servir la aplicación en su navegador.
5. Abra su navegador y vaya a la dirección http://localhost:4200 para ver la aplicación.

## Conclusiones

Este proyecto proporciona una solución simple y efectiva para la gestión de eventos en línea, permitiendo a los usuarios ver detalles completos sobre los eventos y comprar entradas de manera rápida y fácil. La estructura clara y organizada del proyecto lo hace fácil de entender y mantener, y las tecnologías utilizadas proporcionan una experiencia fluida y sin problemas para los usuarios.
