import { BottomArrows } from "../Commom/BottomArrows";
import Heading from "../Commom/Heading";
import "./About.css";

export default function About({ setPage }) {

    return (
        <div id="about" className="about">
            <Heading title={'About'} setPage={setPage}/>
            <div className="blackBox">
                <p>
                    In this website you can find info related to Pedro&apos;s work,
                </p>
                <p>
                    as a developer
                </p>
                <p>
                    and tech entrepreneur.
                </p>
            </div>
            <h2>About Pedro</h2>
            <p>
                Pedro Franceschin is a self taught web(3) full stack developer and smart contract engineer with particular expertise in EVM environments.
                {/* <br/>
                <br/> */}
                {' '}Although proficient in web development, he is particularly interested in leveraging blockchain technology to enable the institutional decentralization of our society.
                <br/>
                <br/>
                The ecosystem of web applications that use blockchains as data layers is often called web3 (aside from it&apos;s more colloquial term, &quot;crypto&quot;).
                {/* <br/>
                <br/> */}
                {' '}Pedro has about 3 years experience in developing open source web3 applications, including all facets of the work, from smart contract engineering, to web development,  blockchain integration and even some web design, having won prizes in hackathons and grants from big web3 players.
                <br/>
                <br/>
                He believes this technology will bring forth a positive movement in society, eroding the current centralization of markets and enabling new kinds of governance to emerge, all with a strictly voluntary character, as a democracies should be. In the end, people should have more sovereignty over their lives and institutions should exist to serve the people, not the other way around.
                <br/>
                <br/>
                Pedro has an academic background in engineering (B.Sc) and Applied Economics (M.A). As a developer he is a member of Venn web studio, a tech startup focused on web/web3 solutions. He acts as full-stack dev, smart-contract engineer, protocol designer and sometimes web designer.
                <br/>
                <br/>
                Aside from his work as a developer, Pedro is also an entrepreneur. He is a co-founder at the aforementioned web studio. Their main project at the moment is a NFT rental solution, currently being called Venn Protocol.
                <br/>
                <br/>
                He has always had an entrepreneurial vein, having opened his first business at the young age of 23 in a non tech sector (namely food and beverages), before realizing his true calling was helping develop awesome technology. He also worked for while for Fundação Getúlio Vargas as an academic researcher/developer, focused on blockchain technology, after he graduated as a Master of Arts in Applied Economics in Universidade de São Paulo, having written his dissertation on Blockchain protocols.
            </p>
            <BottomArrows setPage={setPage}/>
        </div>
    )
}
