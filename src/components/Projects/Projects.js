import './Projects.css';
import Heading from '../Commom/Heading';

export default function Projects({ setPage }) {

    return (
        <>
        <Heading title={'Projects'} setPage={setPage} />
        <div className='projectsPage'>
            <div className='project'>
                <div className='projectHeaderLeft'>
                    <h3>Graphia</h3>
                </div>
                <p><span className='label'>About:</span> protocol that leverages blockchain to enable automatic and recursive funding distribution based on a cross-reference tree. The main cases being studied right now are ‘open source software’ (possibly including package manager and github integration), publishing (scientific and otherwise) and music streaming. The core concept is that instances of work that receive funding can share the funding, in a programmatic fashion, with other works that had relevant contribution.</p>
                <p><span className='label'>Stage:</span> early development.</p>
                <p><span className='label'>Team:</span> Australopitech.</p>
            </div>
        </div>
        </>
    )
}