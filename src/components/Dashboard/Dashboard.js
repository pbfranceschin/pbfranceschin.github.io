import classNames from 'classnames';
import './Dashboard.css';
import { Info, Business, Portfolio, Projects, CV } from './Graphics';

export function DashboardMobile() {

    return (
        <div className='dashboardMobile'>
            <div className='row'>
                <div className='button'><Info/></div>
                <div className='button'><Business/></div>
                <div className={classNames('button', 'hiddenMobile')}>
                    <Portfolio/>
                </div>
            </div>
            <div className='row'>
                <div className={classNames('button', 'hiddenTablet')}>
                    <Portfolio/>
                </div>
                <div className='button'>
                    <Projects/>
                </div>
                <div className={classNames('button', 'hiddenMobile')}>
                    <CV/>
                </div>
            </div>
            <div className='lastRow'>
                <div className='button'>
                    <CV/>
                </div>
            </div>
        </div>
    )
}

export function DashboardDesktop() {

    return (
        <div className='dashboardDesktop'>
            <div className='row'>
                <div className='button'><Info/></div>
                <div className='button'><Business/></div>            
            </div>
            <div className='row'>
                <div className='button'><Portfolio/></div>
                <div className='button'><Projects/></div>
            </div>
            <div className='lastRow'>
                <div className='button'><CV/></div>
            </div>
        </div>
    )
}