import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(<App />);
