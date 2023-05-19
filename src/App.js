import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AccountPage from './pages/AccountPage/AccountPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ContactPage from './pages/ContactPage/ContactPage';
import CartPage from './pages/CartPage/CartPage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import AddProductPage from './pages/AddProductPage/AddProductPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/contacts' element={<ContactPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/product/:id' element={<SingleProductPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/add' element={<AddProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;