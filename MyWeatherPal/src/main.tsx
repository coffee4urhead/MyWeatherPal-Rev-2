import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./compiled-css-code/index.css"
import App from './App.tsx'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error("Failed to find root element")
  
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
