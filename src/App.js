import './styles/styles.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

export default function App() {
  return (
    <body>

      <header>
        <Header />
      </header>

      <main>
        <Main />
      </main>

      <footer>
        <Footer />          
      </footer>

    </body>
  );
}
