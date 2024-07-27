import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";



function DefaultLayout({children}) {
    return (<div className="Wrapper">
         <Header />
         <Body />
        <div>{children}</div>
    </div>);
}

export default DefaultLayout;