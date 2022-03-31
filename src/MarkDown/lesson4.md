# React Context

Context está diseñado para poder compartir datos que pueden ser considerados globales al árbol de los componentes de react.

## Crear context

Para crear un contexto se hace uso del API React.createContext

~~~jsx
import React from 'react';
export const AppContext = React.createContext();
~~~

## Context.Provider

AppContext.Provider compartirá el valor que esté en la propiedad value. 

~~~jsx
<AppContext.Provider value={{
       // ...valores globales
}}>{props.children}</AppContext.Provider>
~~~

## Acceder a los valores de un context

Para acceder a los valores del contexto se hace uso del hook useContext o mediante AppContext.Consumer

~~~jsx
import {AppContext} from '../context'
 
export const TestContext = () => {
   const {item} = React.useContext(AppContext)
   return (
       <div>
           <p>{item.counter}, {item.counter2}</p>
       </div>
   )
}
~~~

> #### Referencias
> [https://reactjs.org/docs/context.html](https://reactjs.org/docs/context.html)