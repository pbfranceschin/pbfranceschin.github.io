import { GlobeIcon } from '../Commom/Graphics';
import Heading from '../Commom/Heading';
import './Portfolio.css';
import { content } from './content';
import { BottomArrows } from '../Commom/BottomArrows';
import classNames from 'classnames';

export default function Portfolio({ setPage }) {
    console.log('content', content)

    return (
        <>
        <Heading title={'Portfolio'} setPage={setPage} />
        <div className='portfolioPage'>
            {/* <div className='portfolioEntry'>
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
            </div> */}
            <PortfolioEntry
            name={content.venn.name}
            website={content.venn.website}
            about={content.venn.about}
            role={content.venn.role}
            activities={content.venn.activities}
            note={<p className={classNames('leftAlign', 'rightAlign')}>Project by Venn. Credit for the idea goes to <a href='https://x.com/bfranceschin1' target='_blank' className='link'>@bfranceschin</a>.</p>}
            side={'left'}
            />
            <PortfolioEntry
            name={content.desmatamento.name}
            website={content.desmatamento.website}
            about={content.desmatamento.about}
            role={content.desmatamento.role}
            activities={content.desmatamento.activities}
            note={<p className={classNames('leftAlign', 'rightAlign')}>Worked alongside Venn team for the Conservation Strategy Fund.</p>}
            side={'right'}
            />
            <div className={classNames('leftAlign', 'rightAlign')}>
                <BottomArrows setPage={setPage} />
            </div>
        </div>
        
        </>
    )
}

const PortfolioEntry = ({
    name,
    website,
    about,
    role,
    activities,
    note,
    side
}) => {

    return (
        <div className='portfolioEntry'>
            <div className={classNames('headerContainer', side === 'right' ? 'headerAlignRight' : '')}>
                <div className={classNames('portfolioHeader', 'leftAlign', 'rightAlign')}>
                    <img className={classNames('headerTailLeft', side === 'left' ? 'tabletHidden' : '')} width='100%' height='100%' src='img/headerTail-left-side-convex.svg' alt='headerTail_left' />
                    <h3 
                    className={classNames('name', name.length > 20 ? 'h3small' : '', side === 'right' ? 'nameRight' : 'nameLeft')}
                    style={side === 'right' ? { textAlign: 'right', paddingLeft: '20px'} : { paddingRight: '20px' }}
                        >{name}</h3>
                    <img className={classNames('headerTailRight', side === 'right' ? 'tabletHidden' : '' )} width='100%' height='100%' src='img/headerTail-right-side-convex.svg' alt='headerTail_right' />
                </div>
            </div>
            <div className={classNames('website', 'leftAlign', 'rightAlign')}>
                <div className='globeIcon'>
                    <GlobeIcon/>
                </div>
                <a href={website}>{website.slice(8)}</a>
            </div>
            <p className={classNames('leftAlign', 'rightAlign')}>
                <span className='label'>About: </span>{about} 
            </p>
            <p className={classNames('leftAlign', 'rightAlign')}>
                <span className='label'>Role: </span>{role}
            </p>
            {/* <p className={classNames('leftAlign', 'rightAlign')}>
                <span className='label'>Activities: </span>{activities}
            </p> */}
            {note}
        </div>
    )
}