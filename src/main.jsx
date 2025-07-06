import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './components/ModalContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalProvider>
  </StrictMode>
);
