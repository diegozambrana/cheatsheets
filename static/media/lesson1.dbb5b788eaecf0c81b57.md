# Introducción y conceptos básicos

## Conceptos básicos

### Declarativo

React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.

Las vistas declarativas hacen que tu código sea más predecible, por lo tanto, fácil de depurar.

### Basado en componentes

Crea componentes encapsulados que manejen su propio estado, y conviértelos en interfaces de usuario complejas.

Ya que la lógica de los componentes está escrita en JavaScript y no en plantillas, puedes pasar datos de forma sencilla a través de tu aplicación y mantener el estado fuera del DOM.

### Aprende una vez, escríbelo donde sea

En React no dejamos fuera al resto de tus herramientas tecnológicas, así que podrás desarrollar nuevas características sin necesidad de volver a escribir el código existente.

React puede también renderizar desde el servidor usando Node, así como potencializar aplicaciones móviles usando React Native.

> #### Referencia
> [https://es.reactjs.org/](https://es.reactjs.org/)


## Crear y correr un proyecto


### Requisitos

Tener instalado node [https://nodejs.org/es/download/](https://nodejs.org/es/download/) (Mac/Linux/windows)


#### instalar create-react-app localmente (opcional) 

~~~bash  
npm install -g npm@latest
npm cache clean --force
npm install -g create-react-app
~~~


### Crear un nuevo proyecto 

Para crear un nuevo proyecto se debe ingresar el siguiente comando en la terminal

~~~bash
create-react-app <NOMBRE_PROYECTO>

# tambien funciona este comando sin necesidad de instalar create-react-app localmente
npx create-react-app <NOMBRE_PROYECTO>
~~~

### Correr un proyecto 

Para correr el proyecto se debe ingresar el siguiente comando dentro el directorio del nuevo proyecto:

~~~bash
npm run start
~~~

La  aplicación  de React estará disponible en [http://localhost:3000/](http://localhost:3000/)


## Estructura de archivo

* **/public** es la carpeta que aloja todos los archivos públicos como `index.html`
* **/src** es donde estará todo los archivos jsx
* **/build** es donde se generarán todos los archivos estáticos.


## JSX

Permite usar los componentes como si fueran etiquetas HTML. ejemplo:

~~~jsx
<MyButton color="blue" shadowSize={2}>
    Haz click en mí
</MyButton>
~~~

Se compila como la siguiente líneas de código

~~~javascript
React.createElement(
    MyButton,
    {color: 'blue', shadowSize: 2},
    'Haz click en mí'
)
~~~

> #### Referencia
> [https://es.reactjs.org/docs/jsx-in-depth.html#gatsby-focus-wrapper](https://es.reactjs.org/docs/jsx-in-depth.html#gatsby-focus-wrapper)
> [https://beta.reactjs.org/learn/writing-markup-with-jsx](https://beta.reactjs.org/learn/writing-markup-with-jsx)
> [https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces](https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces)


## Virtual DOM

El DOM virtual (VDOM) es un concepto de programación donde una representación ideal o “virtual” de la IU se mantiene en memoria y en sincronía con el DOM “real”, mediante una biblioteca como ReactDOM. Este proceso se conoce como reconciliación.

> #### Referencia
> [https://es.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom](https://es.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom)

## subir proyecto a Github pages

Instalar paquete necesarios

~~~bash
npm install --save-dev gh-pages
~~~

Actualizar package.json

~~~javascript
    "homepage":"https://[nombre_usuario].github.io/[nombre_repositorio]",
~~~

También agregar los siguiente comandos

~~~javascript
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
~~~

Correr los siguientes comandos en la terminal dentro de atributo `scripts`

~~~bash
npm run build
npm run deploy
~~~

Ir a la dirección del repositorio, ir a Settings y a la sección Pages, debería mostrar un mensaje **Your site is published at ...**

## Extra

### Herramientas

* **React Developer Tools** [Link](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?utm_source=chrome-ntp-icon)
* **Redux DevTools** [Linnk](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?utm_source=chrome-ntp-icon)


> #### Documentación
> La mayor parte de la documentación aquí es obtenida desde los sitios oficiales de React.js
> * DOcumentación oficial React.js [https://es.reactjs.org/docs/getting-started.html](https://es.reactjs.org/docs/getting-started.html)
> * Documentación Beta React.js [https://beta.reactjs.org/](https://beta.reactjs.org/)