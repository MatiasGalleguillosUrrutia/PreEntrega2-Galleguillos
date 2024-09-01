
# Academia de Danza - E-commerce

Este proyecto es una aplicación de e-commerce para una academia de danza, desarrollada con React.js y Firebase. Los usuarios pueden navegar por las clases disponibles, ver detalles de cada clase, agregar clases al carrito de compras y proceder al checkout para completar su compra.

## Funcionalidades Principales

- **Navegación por Clases:** Los usuarios pueden navegar por diferentes categorías de clases de danza y ver detalles específicos.
- **Carrito de Compras:** Permite a los usuarios agregar clases al carrito y ver un resumen de su selección.
- **Checkout:** Proceso para completar la compra de las clases seleccionadas.
- **Carga Masiva de Productos:** Funcionalidad para agregar múltiples productos desde un archivo JSON a la base de datos de Firebase.
- **Vaciar Colección:** Funcionalidad para vaciar completamente una colección en Firebase Firestore.

## Componentes Importantes

### `UploadProductos`

Este componente se encarga de cargar productos masivamente desde un archivo JSON (`productos.json`) a Firebase Firestore. 

- **Uso:** 
  - Cuando se accede a la ruta `/upload`, el componente `UploadProductos` lee el archivo JSON que contiene los detalles de los productos (como `title`, `categoryid`, `imageid`, `price`, etc.) y los inserta en la colección `items` de Firebase Firestore.
  - Este proceso es útil cuando se necesita cargar una gran cantidad de productos de una sola vez.

- **Cómo Funciona:**
  - El archivo JSON debe estar correctamente estructurado y colocado en la carpeta `src/data` del proyecto.
  - El componente utiliza la función `addDoc` de Firebase Firestore para agregar cada producto de forma individual.
  - Una vez completada la carga, puedes eliminar o desactivar este componente para evitar cargas duplicadas.

### `DeleteCollection`

Este componente se utiliza para vaciar una colección específica en Firebase Firestore, eliminando todos los documentos contenidos en ella.

- **Uso:**
  - Accede a la ruta `/delete-collection` para ejecutar este componente.
  - El componente `DeleteCollection` recorre todos los documentos en la colección especificada (`items` en este caso) y los elimina uno por uno.
  - Esto es útil para limpiar la base de datos durante el desarrollo o cuando se necesita reiniciar los datos de una colección.

- **Cómo Funciona:**
  - El componente utiliza `getDocs` para obtener todos los documentos en la colección y luego `deleteDoc` para eliminarlos.
  - Para mejorar el rendimiento y evitar bloqueos, el proceso de eliminación se realiza en lotes.

## Instalación y Configuración

1. Clona este repositorio.
   ```bash
   git clone https://github.com/tu-usuario/academia-de-danza.git
   ```
2. Instala las dependencias necesarias.
   ```bash
   npm install
   ```
3. Configura Firebase en tu proyecto:
   - Crea un proyecto en Firebase.
   - Agrega tu configuración de Firebase en el archivo `src/firebase/config.js`.

4. Coloca tu archivo JSON (`productos.json`) en `src/data/`.

5. Inicia el servidor de desarrollo.
   ```bash
   npm start
   ```

## Uso de las Funcionalidades

- **Subir Productos Masivamente:**
  - Navega a `http://localhost:3000/upload` para subir productos desde el archivo JSON a Firestore.
  
- **Vaciar una Colección:**
  - Navega a `http://localhost:3000/delete-collection` para eliminar todos los documentos de la colección especificada en Firestore.

## Tecnologías Utilizadas

- **React.js**
- **Firebase Firestore**
- **Bootstrap**

## Contribución

Las contribuciones son bienvenidas. Por favor, crea un fork del repositorio y realiza un pull request con tus cambios.

## Licencia

Este proyecto está bajo la licencia MIT.
