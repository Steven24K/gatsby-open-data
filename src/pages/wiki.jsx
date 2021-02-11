import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import { FormControl, InputGroup, Form } from "react-bootstrap";

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

    return (
        <Layout>
            <div className="about-container">
                <Helmet title={`Wiki | ${config.siteTitle}`} />
                <h1>Welcome to Wikipedia</h1>
                <h2>The largest free wiki!</h2>

                <InputGroup>
                    <FormControl
                        value={searchQuery} onChange={e => setQuery(e.target.value)}
                        placeholder="Search the Wiki"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" checked={useCustomLang} onChange={() => toggleCustimLang(!useCustomLang)} />
                    </InputGroup.Prepend>
                    {useCustomLang && <FormControl aria-label="Text input with checkbox" value={customLang} onChange={e => setCustomLang(e.target.value)} />}
                    <Form.Group controlId="exampleForm.ControlSelect1"  >
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select" onChange={e => setLang(e.target.value)}>
                            {available_languages.map(lan => <option key={lan} value={lan}>{lan}</option>)}
                        </Form.Control>
                    </Form.Group>
                </InputGroup>


                <select onChange={e => setLang(e.target.value)}>
                    {available_languages.map(lan => <option key={lan} value={lan}>{lan}</option>)}
                </select>

                <div>
                    <iframe src={`https://${(useCustomLang && customLang != "") ? customLang : lang}.wikipedia.org/wiki/${searchQuery}`} width={screen.width * 0.8} height={screen.height} />
                </div>


            </div>
        </Layout>
    );
}

export default WikiPage;
