import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';


import Header from '../js/components/header';
import Navigation from '../js/components/navigation';
import Footer from '../js/components/footer';


document.addEventListener('DOMContentLoaded', () => {return ReactDOM.render(<Header />, document.getElementById('reactHeader'));} );

document.addEventListener('DOMContentLoaded', () => {return ReactDOM.render(<Navigation />, document.getElementById('reactNavigation'));} );

document.addEventListener('DOMContentLoaded', () => {return ReactDOM.render(<Footer />, document.getElementById('reactFooter'));} );
