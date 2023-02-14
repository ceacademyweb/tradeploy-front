import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider } from "react-router-dom"
import Router from "./routes/Router";
import './scss/styles.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={Router}/>
)
