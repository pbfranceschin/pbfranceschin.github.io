import './App.css';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import { DashboardMobile } from './components/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Hero />  
      <main className='passion-one'>
        <DashboardMobile/>
        <Footer/>
        <f>art by Stanislaw Szukalski.</f>
      </main> 
    </>
  );
}

export default App;
