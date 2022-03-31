# Redux

## Flux

Flux es la arquitectura de aplicaciones que utiliza Facebook para crear aplicaciones web del lado del cliente.

![gráfica de arquitectura flux](redux/flux.png)

> #### Referencias
> [https://facebook.github.io/flux/docs/in-depth-overview/](https://facebook.github.io/flux/docs/in-depth-overview/ "Flux")

## Instalar Redux

Para instalar react-redux correr el siguiente comando:

~~~bash
npm install @reduxjs/toolkit react-redux
~~~

## Configuración de Redux

### Crear Redux Store

Store es donde se guardará todo los estados de redux de nuestra aplicación

~~~jsx
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
 reducer: {},
})
~~~

### Proveer el Redux Store a React

Una vez creado el archivo store, se debe hacer hacer que esté disponible para los componentes de react con Provider en el archivo src/index.js

~~~jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
 document.getElementById('root')
)
~~~

### Crear Redux State Slice

CreateSlice es una función que acepta un estado inicial, un objeto lleno de funciones reducer, y un nombre (slice name) y automáticamente genera acciones para crear y tipos que corresponden a los reducers y el estado.

~~~jsx
import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
 name: 'counter',
 initialState: {
   value: 0,
 },
 reducers: {
   increment: (state) => {
     state.value += 1
   },
   decrement: (state) => {
     state.value -= 1
   },
   incrementByAmount: (state, action) => {
     state.value += action.payload
   },
 },
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
~~~

### Agregar el Slice Reducers al Store

Se debe actualizar el slice al archivo donde se configura el Store.

~~~jsx
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
 reducer: {
   counter: counterReducer,
 },
})
~~~

> #### Referencias
> [https://react-redux.js.org/](https://react-redux.js.org/ "React Redux")
> [https://react-redux.js.org/introduction/getting-started](https://react-redux.js.org/introduction/getting-started "React Redux")