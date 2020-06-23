import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from './App';


it('renders correctly', () => {
    const movie ={ 
        name: "Alita Battle Angel",
        genre: "Action",
        format: "DVD",
        running_time: "117 Minutes",
        age_restriction: "13",
        error:""
    };

    const renderer = ReactTestRenderer
    expect(renderer).toMatchSnapshot();
    console.log(renderer);
  });
