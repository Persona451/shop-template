import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AccountPage from './pages/AccountPage/AccountPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ContactPage from './pages/ContactPage/ContactPage';
import CartPage from './pages/CartPage/CartPage';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/account' element={<AccountPage/>} />
          <Route path='/catalog' element={<CatalogPage/>} />
          <Route path='/contacts' element={<ContactPage/>} />
          <Route path='/cart' element={<CartPage/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;