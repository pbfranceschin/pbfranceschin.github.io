import './Hero.css';
import { DashboardDesktop } from '../Dashboard/Dashboard';

export default function Hero({ setPage }) {

    return (
        <div className='hero'>
            <div className='image'>
                <img 
                alt='hero-art' 
                src='img/Van-den-Bergen.gif'
                height="auto"
                width='100%'
                />
            </div>
            <div className='dashboardContainer'>
                <DashboardDesktop setPage={setPage} />
            </div>
            <div className='gradient'></div>
        </div>
    )
}