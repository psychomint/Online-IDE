import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import Landing from "./components/Landing";

const AppLayout = () => {
    return(
        <div className="app">
            <Landing/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);