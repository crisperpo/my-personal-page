import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './pages/App/';
import { AppProvider } from './context/AppProvider';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
);
