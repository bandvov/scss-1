import './App.scss';
import BreadCrumbs from './components/breadcrumbs/BreadCrumbs';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/Main/Main';
import Title from './components/Title/Title';
function App() {
  return (
    <div className="app">
      <Header />
      <BreadCrumbs />
      <Title />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
