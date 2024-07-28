import './Common.css';
import { BackArrow } from './Arrow';

export default function Heading({ title, setPage }) {
    
    return (
        <div className="heading">
            <h1>{title}</h1>
            <div className="backArrowContainer" onClick={() => setPage('home')}>
                <BackArrow/>
            </div>
        </div>
    )
}