import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeContext } from '@skbkontur/react-ui';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import theme from './theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContext.Provider>
  </StrictMode>,
)
