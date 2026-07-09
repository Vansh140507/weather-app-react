import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./Head";
import Body from "./body";


function App(){
    return(
        < div className="main">
        <Head></Head>
        <Body></Body>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("display")).render(<App></App>);