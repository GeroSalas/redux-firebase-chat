import 'babel-polyfill'
import React from 'react'
import ReactDOM from "react-dom";
import Root from './RootNode'
import configureStore from './configureStore'

const store = configureStore()
const rootNode = document.getElementById('app')

ReactDOM.render(<Root store={store} />, rootNode)
