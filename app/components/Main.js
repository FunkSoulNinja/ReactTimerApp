import React from 'react';

import Nav from './Nav';


const Main = (props) => {
    return (
        <div>
            <div>
                <Nav />
                <div>
                    <p>Main.js</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Main;
