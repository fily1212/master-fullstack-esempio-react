import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Esempio from './Esempio.tsx'
import EsempioConProps from './EsempioConProps.tsx'
import Bordo from './Bordo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Esempio />
    <Esempio />
    {/* <Lista /> 
    const lista = [
    {nome:"Mario", cognome: "Rossi"}, {nome:"Luigi", cognome: "Verdi"}]
    <EsempioConProps> 
    */}

    <EsempioConProps nome="Maria" cognome="Rossi" />
    <Bordo>
      <Esempio />
    </Bordo>
  </StrictMode>,
)
