import { GlobeIcon } from '../Commom/Graphics';
import Heading from '../Commom/Heading';
import './Portfolio.css';

export default function Portfolio({ setPage }) {

    return (
        <>
        <Heading title={'Portfolio'} setPage={setPage} />
        <div className='portfolioPage'>
            <div className='portfolioEntry'>
                <div className='portfolioHeaderLeft'>
                    <div className='website'>
                        <div className='globeIcon'>
                            <GlobeIcon/>
                        </div>
                        <h3>venn.xyz</h3>
                    </div>
                </div>
                <p>
                    <span className='label'>About:</span> dapp that leverages smart contract accounts to empower users to engage in a new kind of NFT rentals market, completely free of collateral and compatible by default. 
                </p>
                <p>
                    <span className='label'>Role:</span> dapp designer, smart contract engineer, full-stack developer, web designer.
                </p>
                <p>
                    <span className='label'>Activities:</span> everything ranging from protocol decisions, smart contract design and testing, to the  web development side, including design and integration with the Ethereum Virtual Machine. Developed with the Australopitech team (credit for the idea goes to <a href='https://x.com/bfranceschin1' target='_blank' className='link'>@bfranceschin</a>).
                </p>
            </div>
        </div>
        
        </>
    )
}