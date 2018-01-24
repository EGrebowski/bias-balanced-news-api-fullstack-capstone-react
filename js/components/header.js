import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Header(props) {
    return (
        <header role="banner">
            <div className="header-text">
                <h1>
                    <span className="blue">B</span>ia
                    <span className="red">S</span><br />
                    <span className="red">B</span>alance
                    <span className="blue">D</span>
                </h1>
            </div>
        </header>
    )
}
