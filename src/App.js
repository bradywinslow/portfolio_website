import './styles/styles.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>

      <header>
        <Header />
      </header>

      <main>
        <Main />
      </main>

      <footer>
        <Footer />          
      </footer>

    </>
  );
}
