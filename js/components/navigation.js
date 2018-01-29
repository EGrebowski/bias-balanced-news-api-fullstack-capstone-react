import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Navigation(props) {
    return (
        <nav role="navigation">
            <div id="messageBox" className="demoMessage">
                <span>Loading ...</span>
            </div>
            <h3>
                <span className="blue">B</span>ia
                <span className="red">S</span>
                <span className="red">B</span>alance
                <span className="blue">D</span>
            </h3>
            <ul className="nav-buttons">
                <li><a href="https://egrebowski.github.io/bias-balanced-news-api-fullstack-capstone-react/build/">Home</a></li>
                <li><a href="#news" id="nav-news">News</a></li>
                <li><a href="#articles" id="nav-reading-list">My Articles <span id="article-count"></span></a></li>
                <li><a href="#index" id="nav-index">Index</a></li>
            </ul>
        </nav>
    )
}
