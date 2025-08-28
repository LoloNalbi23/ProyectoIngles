import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Ingles from './Ingles.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ingles />
  </StrictMode>,
)
