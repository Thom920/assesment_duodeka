import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalStateProvider } from './state/GlobalState.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GlobalStateProvider>
    <App />
  </GlobalStateProvider>
  </React.StrictMode>,
)
