import './App.css';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import { DashboardMobile } from './components/Dashboard/Dashboard';
import About from './components/About/About';
import Businesses from './components/Businesses/Businesses';
import Portfolio from './components/Portfolio/Portfolio';
import Projects from './components/Projects/Projects';
import AnimatePresence from './components/Animate/AnimatePresence';
import { useCallback, useEffect, useState } from 'react';

function matchMinHeight(sourceElement, targetElement) {
  const sourceHeight = sourceElement.offsetHeight;
  targetElement.style.minHeight = `${sourceHeight}px`;
}

// function scrollToMain () {
//   const element = document.getElementById("main");
//   const pos = element.getBoundingClientRect().top;
//   setTimeout(() => {
//       window.scrollTo({ top: pos, behavior:'smooth' });
//   }, 100);
// }

function scrollToHeroBottom () {
  const hero = document.getElementById('hero');
  const offset = hero.offsetHeight;
  setTimeout(() => {
    window.scrollTo({ top: offset, behavior: 'smooth'})
  }, 100)
}

function App() {
  const [page, setPage] = useState('home');
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const source = document.getElementById('dashboardMobile');
    const target = document.getElementById('pageAnimator');
    if(source) matchMinHeight(source, target);
    window.addEventListener('resize', () => {
      if(source) matchMinHeight(source, target);
    });
  }, [page]);

  const handlePageChange = useCallback((newPage) => {
    console.log('handlePageChange called with:', newPage);
    setAnimateKey(prev => prev + 1);
    scrollToHeroBottom();
    setTimeout(() => {
      console.log('Changing page to:', newPage);
      setPage(newPage);
    }, 300); // Reduced from 500ms to match animation duration
  }, []);
  
  return (
    <>
      <Hero setPage={handlePageChange} />  
      <main id='main' className='passion-one' style={{ minHeight: 'calc(100vh - 150px)' }}>
        <AnimatePresence id='pageAnimator' trigger={animateKey}>
          {page === 'home' && <DashboardMobile setPage={handlePageChange} />}
          {page === 'about' && <About setPage={handlePageChange} />}
          {page === 'business' && <Businesses setPage={handlePageChange} />}
          {page === 'portfolio' && <Portfolio setPage={handlePageChange} />}
          {page === 'projects' && <Projects setPage={handlePageChange} />}
        </AnimatePresence>
      </main> 
      <footer className='passion-one'>
        <Footer/>
        <span className='footnote'>art by Stanislaw Szukalski.</span>
      </footer>
    </>
  );
}

export default App;
