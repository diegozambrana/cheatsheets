# Hooks

**¿Qué es un Hook?** Un Hook es una función especial que permite “conectarse” a características de React. Por ejemplo, useState es un Hook que te permite añadir el estado de React a un componente de función.

## Básicos

### useState

El Hook useState nos permite añadir el estado de React a un componente de función.

~~~javascript
const [nombre, setNombre] = React.useState('code.bo')
~~~

> #### Referencias
> [https://es.reactjs.org/docs/hooks-state.html](https://es.reactjs.org/docs/hooks-state.html)

### useEffect

El Hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales. El hook useEffect se ejecuta después del primer renderizado y en cada actualización del componente.

~~~javascript
React.useEffect(() => {
  console.log(`ejecuta cada actualización del componente`)
})
~~~

Efectos con saneamiento:

~~~javascript
const BoxMousePosition = () => {
  const [mouse, setMouse] = React.useState({x: 0, y: 0})

  React.useEffect(() => {
    const onMouseMove = (e) => {
      console.log(e.clientX, e.clientY)
      setMouse({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div>{mouse.x} - {mouse.y}</div>
  )
}
~~~

Escucha cada vez que se actualiza alguna variable

~~~javascript
  React.useEffect(() => {
    console.log(`Se ejecuta una sola vez`)
  }, [])

  React.useEffect(() => {
    console.log(`se ejecuta cada vez que se actualiza counter`, counter)
  }, [counter])
~~~

> #### Referencias
> [https://es.reactjs.org/docs/hooks-effect.html](https://es.reactjs.org/docs/hooks-effect.html)


### useLayoutEffect

La firma es idéntica a useEffect, pero se dispara de forma síncrona después de todas las mutaciones de DOM. Use esto para leer el diseño del DOM y volver a renderizar de forma sincrónica. Las actualizaciones programadas dentro de useLayoutEffect se vaciarán sincrónicamente, antes de que el navegador tenga la oportunidad de pintar.

~~~javascript
  React.useLayoutEffect(() => {
      console.log(` - useLayoutEffect counter2`, counter2)
  }, [counter2])
~~~

> #### Referencia:
> [https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect](https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect)

### useMemo

Pasa una función de "crear" y un arreglo de dependencias. useMemo solo volverá a calcular el valor memorizado cuando una de las dependencias haya cambiado. Esta optimización ayuda a evitar cálculos costosos en cada render.

~~~javascript
  const totalCounter = React.useMemo(() => {
    if(counter !== undefined && counter2 !== undefined){
      return counter + counter2;
    }
    return 0;
  }, [counter, counter2])
~~~

> #### Referencias
> [https://es.reactjs.org/docs/hooks-reference.html#usememo](https://es.reactjs.org/docs/hooks-reference.html#usememo)


### useRef

~~~javascript
function TextInputWithFocusButton() {
 const inputEl = useRef(null);

 const onButtonClick = () => {
   // `current` apunta al elemento de entrada de texto montado
   inputEl.current.focus();
 };
 return (
   <>
     <input ref={inputEl} type="text" />
     <button onClick={onButtonClick}>Focus the input</button>
   </>
 );
}
~~~

### useReducer

~~~javascript
const initialState = {count: 0};
 
function reducer(state, action) {
 switch (action.type) {
   case 'increment':
     return {count: state.count + 1};
   case 'decrement':
     return {count: state.count - 1};
   default:
     throw new Error();
 }
}
 
function Counter() {
 const [state, dispatch] = useReducer(reducer, initialState);
 return (
   <>
     Count: {state.count}
     <button onClick={() => dispatch({type: 'decrement'})}>-</button>
     <button onClick={() => dispatch({type: 'increment'})}>+</button>
   </>
 );
}
~~~

## Creación de Hooks

~~~javascript
import React from 'react';
 
export const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    const localStorageItem = localStorage.getItem(itemName);
    if(!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      setItem(initialValue);
    }else{
      setItem(JSON.parse(localStorageItem))
    }
  }, [])

  const saveItem = (value) => {
    localStorage.setItem(itemName, JSON.stringify(value));
    setItem(value);
  }

  return {item, saveItem}
}

// Test LocalStorage
export const TestLocalStorage = () => {
  const { item, saveItem } = useLocalStorage('counter', {counter: 0, counter2: 0});

  return ( item ?
    <div>
      <h2>Counter 1: {item.counter} - Counter 2: {item.counter2} </h2>
      <button onClick={() => saveItem({...item, counter: item.counter + 1})}>update coutner 1</button>
      <button onClick={() => saveItem({...item, counter2: item.counter2 + 1})}>update coutner 2</button>
    </div>
    : 'LOADING...'
  )
}
~~~

> [https://es.reactjs.org/docs/hooks-reference.html](https://es.reactjs.org/docs/hooks-reference.html)