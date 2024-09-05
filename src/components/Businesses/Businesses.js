import './Businesses.css';
import Heading from '../Commom/Heading';
import { ApeLogo, GlobeIcon, VennLogo } from '../Commom/Graphics';
import { BottomArrows } from '../Commom/BottomArrows';
import classNames from 'classnames';

export default function Businesses({ setPage }) {
    
    return (
        <>
        <Heading title={'Businesses'} setPage={setPage} />
        <div className='businessPage'>
            <Venn />
            {/* soon... */}
        </div>
        <div style={{ display: 'flex', justifyContent: 'end' , width: '100%' }}>
            <BottomArrows setPage={setPage}/>
        </div>
        </>
    )
}

function Australopitech () {

    return (
        <div className='business'>
            <div className='businessHeaderRight'>
                <div className='apeLogo'>
                    <ApeLogo/>
                </div>
                <div className='frameRight'>
                    <h3>Australopitech</h3>
                    <div className='website'>
                        <div className='globeIcon'>
                            <GlobeIcon/>
                        </div>
                        <p style={{ margin: 0 }}>australopitech.xyz</p>
                    </div>
                </div>
            </div>
            <p>Web3 development, dapp design, blockchain solutions and consulting.</p>
            <p><span className='label'>Role:</span> Co-owner, full-stack developer, protocol designer and smart contract engineer.</p>
        </div>
    )
}

function Venn () {

    return (
        <div className='business'>
            <div className='bannerLeft'>
                <div className='vennLogo'>
                    <VennLogo/>
                </div>
                <div className='headerLeft'>
                    <img className='tailLeft' src='img/business-headerTail-rightside.svg' alt='header_tail'/>
                    <h3>Venn Protocol</h3>                                        
                </div>
            </div>
            <div className='content'>
                {/* <div className={classNames('line', 'hiddenLg')}></div> */}
                <p>Tech startup focused on web(3) applications, smart contract protocols, decentralized applications.</p>
                <p><span className='label'>Role:</span> Co-founder, engineer, full-stack developer.</p>
                <div className='website'>
                    <div className='globeIcon'>
                        <GlobeIcon/>
                    </div>
                    <p style={{ margin: 0 }}>vennstudio.dev</p>
                </div>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                    <div className='line'></div>
                </div>
            </div>
        </div>
    )
}



