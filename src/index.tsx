import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App';
import PageLayout from '../src/components/PageLayout';
import Projects from '../src/pages/Projects';
import Contact from '../src/pages/Contact';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root container not found');
}

ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />

      <Route element={<PageLayout />}>
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
