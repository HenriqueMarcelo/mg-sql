import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';

const appElement = document.getElementById('app');
if (!appElement) {
    throw new Error("App root element not found");
}
const root = createRoot(appElement);

root.render(<App />);
