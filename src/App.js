import './App.css';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import { DashboardMobile } from './components/Dashboard/Dashboard';
import About from './components/About/About';
import Businesses from './components/Businesses/Businesses';
import Portfolio from './components/Portfolio/Portfolio';
import Projects from './components/Projects/Projects';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');
  
  return (
    <>
      <Hero setPage={setPage} />  
      <main id='main' className='passion-one'>
        {page ==='home' && <DashboardMobile setPage={setPage} />}
        {page === 'about' && <About setPage={setPage} />}
        {page === 'business' && <Businesses setPage={setPage} />}
        {page === 'portfolio' && <Portfolio setPage={setPage} />}
        {page === 'projects' && <Projects setPage={setPage} />}
        <Footer/>
        <span className='footnote'>art by Stanislaw Szukalski.</span>
      </main> 
    </>
  );
}

export default App;
