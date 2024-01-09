import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/app.scss'
import { Suspense, lazy } from 'react';
import { loading } from './components/loading.tsx';
import Header from './components/header.tsx';
const Dashboard=lazy(()=>import('./pages/admin/dashboard.tsx'));
const Customer=lazy(()=>import('./pages/admin/customer.tsx'));
const Transactions=lazy(()=>import('./pages/admin/transactions.tsx'));
const Product=lazy(()=>import('./pages/admin/product.tsx'))
const Home =lazy(()=>import('./pages/home.tsx'));
const Search =lazy(()=>import('./pages/search.tsx'));
const Cart =lazy(()=>import('./pages/cart.tsx'));

function App() {
  return (

  <BrowserRouter>
  <Header/>
  <Suspense fallback={loading}>
  <Routes>
    <Route path='/' element={<Home/>}/> 
    {/* admin */}
    <Route path='/admin/dashboard' element={<Dashboard/>}/> 
    <Route path='/admin/product' element={<Product/>}/> 
    <Route path='/admin/transaction' element={<Transactions/>}/> 
    <Route path='/admin/customer' element={<Customer/>}/> 
    <Route path='/Search' element={<Search/>}/> 
    <Route path='/Cart' element={<Cart/>}/> 
  </Routes>
  </Suspense>
  </BrowserRouter> 

  );
}

export default App;
