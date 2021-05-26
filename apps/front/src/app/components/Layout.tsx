import React, { Children } from 'react';
import Navigation from './Navigation'


    interface ILayout {
        children : JSX.Element | JSX.Element[];
    }

    const Layout = ({ children }:ILayout) => {

        return  (
            <div>
                <Navigation />
                {children}
            </div>)
    };

export default Layout
