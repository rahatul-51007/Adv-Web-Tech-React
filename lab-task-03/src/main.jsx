import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './ThemeContext.jsx'
import { StudentProvider } from './StudentContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <StudentProvider>
        <App />
      </StudentProvider>
    </ThemeProvider>
  </StrictMode>,
)
