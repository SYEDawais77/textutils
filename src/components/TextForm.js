import React, { useState } from 'react'

export default function TextForm(props) {

    const handleClear = () => {
        setText("")
        setUniqueEmails("")
        setStyle1('none')
    }
    const HanldetoUpper = () => {
        let newText = text.toUpperCase()
        setText(newText)
        setStyle1('none')
    }
    const HandletoLower = () => {
        let newText = text.toLowerCase()
        setText(newText)
        setStyle1('none')
    }
    const onChangeText = (event) => {
        setText(event.target.value)
        setStyle1('none')
    }

    function toTitleCase() {
        if ((text === null) || (text === ''))
            return props.showAlert("Please enter some text in the Text Area", 'info');
        else
            text.toString();

        setText(text.replace(/\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() +
                    txt.slice(1).toLowerCase();
            }));
    }

    function countWords() {
        return text.split(/\s+/).filter((element) => { return element.length !== 0 }).length
    }



    const extractEmails = (text) => {
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
        const emails = text.match(emailRegex) || []
        return emails
    }


    const handleEmailExtractor = () => {
        const emails = extractEmails(text);
        if (document.getElementById('textArea').value === '') {
            props.showAlert("Please enter some text in the Text Area.", 'info')
        } else if (emails.length > 0) {
            setStyle1('inline')
            const emails = extractEmails(text);
            setUniqueEmails(new Set(emails));
        } else {
            props.showAlert("No Email Address found in the text you entered in the text area", 'info')
        }
    };




    const [text, setText] = useState("");
    const [uniqueEmails, setUniqueEmails] = useState(new Set());
    const [style1, setStyle1] = useState("none");


    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ background: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={onChangeText} id="textArea" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-3 my-2" disabled={text.length === 0} onClick={HanldetoUpper}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3 my-2" disabled={text.length === 0} onClick={HandletoLower}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-3 my-2" disabled={text.length === 0} onClick={toTitleCase}>Convert to Title Case</button>
                <button className="btn btn-primary mx-3 my-2" disabled={text.length === 0} onClick={handleEmailExtractor}>Extract Email Address</button>
                <button className="btn btn-primary mx-3 my-2" disabled={text.length === 0} onClick={handleClear}>Clear Text Area</button>

                <h2 className='my-3'>Your Text Summary</h2>
                <p> {countWords()} Words and {text.length} Characters </p>
                <p> {0.008 * countWords()} minutes read </p>

                <h2>Text Preview</h2>
                <p>{text.length > 0 ? text : "Enter text to preview"}</p>

                <div id='emailAddressesContainer' style={{ display: style1 }} >
                    <h2>Unique Email Addresses:</h2>
                    <ul>
                        {Array.from(uniqueEmails).map((email, index) => (
                            <li key={index}>{email.length > 0 ? email : "No Email Address found in the above entered text"}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
