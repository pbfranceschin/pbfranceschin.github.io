import './Businesses.css';
import Heading from '../Commom/Heading';
import { ApeLogo, GlobeIcon, VennLogo } from './Graphics';
import { BottomArrows } from '../Commom/BottomArrows';

export default function Businesses({ setPage }) {
    
    return (
        <>
        <Heading title={'Businesses'} setPage={setPage} />
        <div className='page'>
            <Venn />
            <Australopitech />
        </div>
        <div style={{ display: 'flex', justifyContent: 'end' , width: '100%' }}>
            <BottomArrows />
        </div>
        </>
    )
}

function Australopitech () {

    return (
        <div className='business'>
            <div className='businessHeader'>
                <div className='apeLogo'>
                    <ApeLogo/>
                </div>
                <div className='frameLeft'>
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
            <p>Role: Co-owner, full-stack developer, protocol designer and smart contract engineer.</p>
        </div>
    )
}

function Venn () {

    return (
        <div className='business'>
            <div className='businessHeader'>
                <div className='apeLogo'>
                    <VennLogo/>
                </div>
                <div className='frameRight'>
                    <h3>Venn Protocol</h3>
                    <div className='website'>
                        <div className='globeIcon'>
                            <GlobeIcon/>
                        </div>
                        <p style={{ margin: 0 }}>venn.xyz</p>
                    </div>
                </div>
            </div>
            <p>Startup, focused on a new NFT rental solution.</p>
            <p>Role: Co-founder, full-stack developer, protocol designer and smart contract engineer.</p>
        </div>
    )
}



