import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense, lazy } from 'react';
import { loading } from './components/loading.tsx';
import Header from './components/header.tsx';
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
    <Route path='/Search' element={<Search/>}/> 
    <Route path='/Cart' element={<Cart/>}/> 
  </Routes>
  </Suspense>
  </BrowserRouter> 

  );
}

export default App;
