import React, { Children } from 'react';
import Navigation from '../Navigation'
import Footer from '../Footer'

    type Props = {};

    interface IPage {
        children : JSX.Element | JSX.Element[];
    }

    const Page = ({ children }:IPage) => {
        
        return  (
            <div>
                <Navigation />
                {children}
                <Footer/>
            </div>)
    };

export default Page
