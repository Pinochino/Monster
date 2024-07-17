import React from "react";
import Header from "../components/Header";


function DefaultLayout({children}) {
    return (<div className="Wrapper">
         <Header />
        <div>{children}</div>
    </div>);
}

export default DefaultLayout;