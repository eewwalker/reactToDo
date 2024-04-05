import { useState } from "react";
import { fetchQuote } from "./quotes";


/** Site wide Header for Productiv
 *  Props: none
 *
 * State:
 * -text: text from quote API
 * -author: author of text from quote API
 *
 * App -> Header
  */
function Header() {
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');

    /** Fetch data from function fetchQuote */
    async function getData() {
        const { text, author } = await fetchQuote();
        setText(text);
        setAuthor(author);
    }

    return (
        <div className="Header">
            <header className="container-fluid pt-4 pb-1">
                <div className="container">
                    <h1>Prøductïv</h1>
                    <p className="lead">The best name in todo list management.</p>
                    {text &&
                        <div>
                            <p>{text}</p>
                            <p>{author}</p>
                            <button onClick={getData}>Nu quote</button>
                        </div>
                    }
                    {!text &&
                        <button onClick={getData}>Click here for an inspirational quote</button>
                    }
                </div>
            </header>
        </div>
    );
}

export default Header;