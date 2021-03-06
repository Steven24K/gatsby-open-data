import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

const available_languages = [
    'en',
    'nl',
    'fr',
    'de',
    'ru',
    'ar',
    'tr',
    'ca',
    'pl',
    'sl',
    'uk',
    'ko',
]

function WikiPage() {
    const [searchQuery, setQuery] = React.useState("")
    const [lang, setLang] = React.useState("en")
    const [useCustomLang, toggleCustimLang] = React.useState(false)
    const [customLang, setCustomLang] = React.useState("")

    const iframeWidth = !(typeof window === 'undefined' || !window.screen) ? screen.width : 500
    const iframeHeight = !(typeof window === 'undefined' || !window.screen) ? screen.height : 1000

    return (
        <Layout>
            <div className="about-container">
                <Helmet title={`Wiki | ${config.siteTitle}`} />
                <h1>Welcome to Wikipedia</h1>
                <h2>The largest free wiki!</h2>

                <input value={searchQuery} onChange={e => setQuery(e.target.value)} placeholder="Search the Wiki" />
                Custom language: <input type="checkbox" checked={useCustomLang} onChange={() => toggleCustimLang(!useCustomLang)} />
                {useCustomLang && <input value={customLang} onChange={e => setCustomLang(e.target.value)} />}
                <select onChange={e => setLang(e.target.value)}>
                    {available_languages.map(lan => <option key={lan} value={lan}>{lan}</option>)}
                </select>


                <div>
                    <iframe src={`https://${(useCustomLang && customLang != "") ? customLang : lang}.wikipedia.org/wiki/${searchQuery}`} width={iframeWidth} height={iframeHeight}>
                    </iframe>
                </div>


            </div>
        </Layout>
    );
}

export default WikiPage;
