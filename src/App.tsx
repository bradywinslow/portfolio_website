import './styles/styles.css';
import Header from '../src/components/Header';
import Home from '../src/pages/Home';

export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Home />
      </main>
    </>
  );
}
