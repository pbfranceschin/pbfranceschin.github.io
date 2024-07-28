import { BackArrow, UpArrow } from './Arrow';
import './Common.css';


export const BottomArrows = () => {

    return (
        <div className='bottomArrowsContainer'>
            <div className='bottomArrows'><UpArrow/></div>
            <div className='bottomArrows'><BackArrow/></div>
        </div>
    )
}