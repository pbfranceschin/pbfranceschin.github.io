import classNames from 'classnames';
import './Dashboard.css';
import { Info, Business, Portfolio, Projects, CV } from './Graphics';

export function DashboardMobile({ setPage }) {

    return (
        <div id='dashboardMobile' className='dashboardMobile'>
            <div className='row'>
                <div className='button' onClick={() => setPage('about')}><Info/></div>
                <div className='button' onClick={() => setPage('business')}><Business/></div>
                <div className={classNames('button', 'hiddenMobile')} onClick={() => setPage('portfolio')}>
                    <Portfolio/>
                </div>
            </div>
            <div className='row'>
                <div className={classNames('button', 'hiddenTablet')}
                onClick={() => setPage('portfolio')}
                >
                    <Portfolio/>
                </div>
                <div className='button'
                onClick={() => setPage('projects')}
                >
                    <Projects/>
                </div>
                <div className={classNames('button', 'hiddenMobile')}>
                    <CV/>
                </div>
            </div>
            <div className='lastRow'>
                <a href='/cv.pdf' download>
                    <div className='button'>
                        <CV/>
                    </div>
                </a>
            </div>
        </div>
    )
}

export function DashboardDesktop({ setPage }) {

    const handleClick = (page) => {
        switch(page) {
            case 'about':
                setPage('about');
                break
            case 'business':
                setPage('business');
                break
            case 'portfolio':
                setPage('portfolio');
                break
            case 'projects':
                setPage('projects');
                break
            default:
                console.error(`wrong input value: ${page}` )
                return
        }
        // const element = document.getElementById("main");
        // const pos = element.getBoundingClientRect().top;
        // setTimeout(() => {
        //     window.scrollTo({ top: pos, behavior:'smooth' });
        // }, 100);
    }

    return (
        <div className='dashboardDesktop'>
            <div className='row'>
                <div className='button' onClick={() => handleClick('about')}><Info/></div>
                <div className='button' onClick={() => handleClick('business')}><Business/></div>
            </div>
            <div className='row'>
                <div className='button' onClick={() => handleClick('portfolio')}><Portfolio/></div>
                <div className='button' onClick={() => handleClick('projects')}><Projects/></div>
            </div>
            <div className='lastRow'>
                <a href='/cv.pdf' download>
                    <div className='button'><CV/></div>
                </a>
            </div>
        </div>
    )
}