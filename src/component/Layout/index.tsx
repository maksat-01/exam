import React from 'react';
import Header from "../Header";
interface IMain {
    children: JSX.Element;
}
const Layout = ({children}:IMain) => {
    return (
        <>
            <Header/>
            <div>
                {children}
            </div>
        </>
    );
};

export default Layout;