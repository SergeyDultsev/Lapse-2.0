import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/app/App.tsx';
import './assets/styles/main.scss';
import { RootProviders } from "@app/providers/RootProviders.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RootProviders>
          <App />
      </RootProviders>
  </StrictMode>,
)
