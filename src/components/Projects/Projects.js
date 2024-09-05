import './Projects.css';
import Heading from '../Commom/Heading';
import classNames from 'classnames';
import { BottomArrows } from '../Commom/BottomArrows';

export default function Projects({ setPage }) {

    return (
        <>
        <Heading title={'Projects'} setPage={setPage} />
        <div className='projectsPage'>
            <div className='project'>
                <div className='projectHeaderContainerLeft'>
                    <div className='projectHeaderLeft'>
                        <img className='projectHeaderTailRight' src='img/projects-headerTail-rightside-down.svg' alt='header_tail'/>
                        <img className={classNames('projectHeaderTailLeft', 'hiddenUpTo800')} src='img/projects-headerTail-leftside-up.svg' alt='header_tail' />
                        <h3>venn protocol</h3>
                    </div>
                </div>
                <p className={classNames('leftAlign', 'rightAlign')}><span className='label'>About:</span> using Venn Smart Accounts and Venn Marketplace users can rent NFT's without collateral in a completely safe and trustless manner. Venn Protocol leverages Account Abstraction and ERC-4337, in a innovative approach to NFT rental scolutions.</p>
                <p className={classNames('leftAlign', 'rightAlign')}><span className='label'>Stage:</span> MVP.</p>
                <p className={classNames('leftAlign', 'rightAlign')}><span className='label'>Team:</span> Venn.</p>
            </div>
            
            <div className='project'>
                <div className='projectHeaderContainerRight'>
                    <div className='projectHeaderRight'>
                        <img className='projectHeaderTailLeft' src='img/projects-headerTail-leftside-down.svg' alt='header_tail'/>
                        <img className={classNames('projectHeaderTailRight', 'hiddenUpTo800')} src='img/projects-headerTail-rightside-up.svg' alt='header_tail' />
                        <h3>graphia</h3>
                    </div>
                </div>
                <p className={classNames('leftAlign', 'rightAlign')}><span className='label'>About:</span> protocol that leverages blockchain to enable automatic and recursive funding distribution based on a cross-reference tree. The main cases being studied right now are ‘open source software’ (possibly including package manager and github integration), publishing (scientific and otherwise) and music streaming. The core concept is that instances of work that receive funding can share the funding, in a programmatic fashion, with other works that had relevant contribution.</p>
                <p className={classNames('leftAlign', 'rightAlign')}><span className='label'>Stage:</span> early development.</p>
                <p className={classNames('leftAlign', 'rightAlign')}><span className='label'>Team:</span> Australopitech.</p>
            </div>
            <div className={classNames('leftAlign', 'rightAlign')}>
                <BottomArrows setPage={setPage}/>
            </div>
        </div>
        </>
    )
}