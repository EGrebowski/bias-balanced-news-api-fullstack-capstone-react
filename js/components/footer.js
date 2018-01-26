import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Footer(props) {
    return (
        <footer role="contentinfo">
            <ul>
                <li>
                <p>2018 Ellie Grebowski</p>
                </li>
                <li><a href="https://github.com/EGrebowski">GitHub</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="mailto:ellie.grebowski@gmail.com" title="Send me an email">Email</a></li>
            </ul>
        </footer>
    )
}
