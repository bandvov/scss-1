import './App.scss';
import BreadCrumbs from './components/breadcrumbs/BreadCrumbs';
import Button from './components/Button/Button';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
function App() {
  return (
    <div className="app">
      <Header />
      <BreadCrumbs />
      <main>
        main
      </main>
      <Footer />
    </div>
  );
}

export default App;
