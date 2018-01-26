import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Footer from './footer';

describe('<Footer />', () => {
    it('Renders without crashing', () => {
        shallow(<Footer />);
    });
});
