import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Navigation from './navigation';

describe('<Navigation />', () => {
    it('Renders without crashing', () => {
        shallow(<Navigation />);
                });
    });
