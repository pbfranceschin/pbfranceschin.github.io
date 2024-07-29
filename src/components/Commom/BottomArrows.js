import { BackArrow, UpArrow } from './Arrow';
import './Common.css';
import classNames from 'classnames';


export const BottomArrows = ({ setPage }) => {

    const handleBack = () => {
        setPage('home');
    }

    const handleUp = () => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }

    return (
        <div className='bottomArrowsContainer'>
            <div 
            className={classNames('bottomArrows', 'desktopHidden')}
            onClick={() => setPage('home')}
            >
                <BackArrow/>
            </div>
            <div 
            className='bottomArrows' onClick={handleUp}>
                <UpArrow/>
            </div>
        </div>
    )
}