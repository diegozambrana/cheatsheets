# Componentes 

* Los componentes son la unidad más fundamental de React.
* Un componente puede ser lo que usted determine, aunque no todo tiene sentido como componente.
* Empezar a pensar en términos de componentes.

## Tipo de componentes

### Class Components

~~~javascript
import React from 'react';

class ClassComponent extends React.Component {
    constructor() {
        super();
        this.execute = this.execute.bind(this);
        this.state = {contador: 0};
    }

    execute(event) {
        this.setState({contador: this.state.contador + 1})
    }

    render() {
        return (
            <button onClick={this.execute}>
                contador {this.state.contador}
            </button>
        );
    }
}

export default ClassComponent;
~~~

### Function Components

~~~javascript
import React from "react";

export const FunctionComponent = (props) => {
    const [contador, setContador] = React.useState(0);

    const execute = () => setContador(contador + 1);

    return (
        <button onClick={execute}>
            contador {contador}
        </button>
    )
}
~~~

## Agregar Estilos a un componente

~~~css
.button-function{
    background-color: blue;
}
~~~

~~~javascript
import React from "react";
import './FunctionComponent.css'

export const FunctionComponent = (props) => {
    const [contador, setContador] = React.useState(0);

    const execute = () => setContador(contador + 1);

    return (
        <button onClick={execute} className="button-function">
            contador {contador}
        </button>
    )
}
~~~

> #### Referencia
> [https://reactjs.org/docs/faq-styling.html](https://reactjs.org/docs/faq-styling.html)
> [https://reactjs.org/docs/dom-elements.html#style](https://reactjs.org/docs/dom-elements.html#style)

## Propiedades

**props** (abreviatura de propiedades) son la configuración de un componente, sus opciones si puede. Se reciben desde arriba e inmutables en lo que respecta al Componente que los recibe.

Un componente no puede cambiar sus accesorios, pero es responsable de unir los accesorios de sus componentes secundarios.

## Estados

El **estado** comienza con un valor predeterminado cuando se monta un componente y luego sufre mutaciones en el tiempo.

Un componente administra su propio estado internamente, pero, además de establecer un estado inicial, no tiene nada que ver con el estado de sus hijos. Se podría decir que el estado es privado.

## props.children

Children es la propiedad que guarda el contenido de un componente.

~~~javascript
<Card color="yellow">
    Hola soy Amarillo
</Card>
~~~

En el ejemplo el texto “Hola soy amarillo” el el contenido.

~~~javascript
 export const CardComponent = ({children, color}) => {
   return (
       <div style={{
           backgroundColor: color || 'gray',
           borderRadius: '8px',
           padding: 8
       }}>
           {children}
       </div>
   )
}
~~~

## Condicionales

El renderizado condicional en React funciona de la misma forma que lo hacen las condiciones en JavaScript. Usa operadores de JavaScript como if o el operador condicional para crear elementos representando el estado actual, y deja que React actualice la interfaz de usuario para emparejarlos.

Puedes usar los operadores  `if`, `&&` y `? :`

~~~javascript
import React from 'react';

export const ConditionalComponent = ({isValid, children}) => {
    if(!isValid){
        return (
            <div>No es valido</div>
        )
    }
    return (
        <div>
            El contenido {children} es valido
        </div>
    )
}
~~~

## Iteraciones

Cuando se requiera mostrar varios componentes similares de una colección de datos, se pueden usar métodos de javascript como ser map.

~~~javascript
import React from 'react';

export const ListComponent = ({list}) => {
    const list = ["hola", "buenos dias", "buenas noches"]
   return (
       <ul>
           {list.map(element => <li>{element}</li>)}
       </ul>
   )
}
~~~

## Eventos

Los eventos en React se definen generalmente de manera declarativa, en el código de la vista o template, producido con JSX en el método `render()`. 

Para definírlo tenemos que indicar dos cosas: Primero el tipo de evento que queremos implementar y luego el método que hará las veces de manejador de evento.

* onClick
* onChange
* onSubmit
* onFocus
* onBlur


~~~javascript
<div>
    <input type="text" onChange={e => console.log(e.target.value)} />
    <button onClick>actualizar</button>
</div>
~~~

> #### Referencia
> [https://reactjs.org/docs/handling-events.html](https://reactjs.org/docs/handling-events.html)