import { createRoot } from 'react-dom/client';
import { App } from './app';
import { BrowserRouter } from 'react-router-dom';
import './style/reset.css';


const container = document.querySelector('#root') as Element;
const root = createRoot(container);

root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
