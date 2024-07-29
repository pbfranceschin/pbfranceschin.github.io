import './App.css';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import { DashboardMobile } from './components/Dashboard/Dashboard';
import About from './components/About/About';
import Businesses from './components/Businesses/Businesses';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('business');
  
  return (
    <>
      <Hero setPage={setPage} />  
      <main className='passion-one'>
        {page ==='home' && <DashboardMobile setPage={setPage} />}
        {page === 'about' && <About setPage={setPage} />}
        {page === 'business' && <Businesses setPage={setPage} />}
        <Footer/>
        <f>art by Stanislaw Szukalski.</f>
      </main> 
    </>
  );
}

export default App;
