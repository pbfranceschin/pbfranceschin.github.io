import { BackArrow, UpArrow } from './Arrow';
import './Common.css';
import classNames from 'classnames';


export const BottomArrows = () => {

    return (
        <div className='bottomArrowsContainer'>
            <div className={classNames('bottomArrows', 'desktopHidden')}><BackArrow/></div>
            <div className='bottomArrows'><UpArrow/></div>
        </div>
    )
}