import React, { Children } from 'react';
import Navigation from '../Navigation'


    interface IPage {
        children : JSX.Element | JSX.Element[];
    }

    const Page = ({ children }:IPage) => {

        return  (
            <div>
                <Navigation />
                {children}
            </div>)
    };

export default Page
