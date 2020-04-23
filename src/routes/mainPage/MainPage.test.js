import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';
import renderer from 'react-test-renderer';

//smoke test
describe('renders without crashing',()=>{
    it('it renders without crashing',()=>{
        const div = document.createElement('div');

        ReactDOM.render(<MainPage />,div);
        ReactDOM.unmountComponentAtNode(div);
    })


//snapshot test
    it('renders the UI as expected', ()=>{
        const tree = renderer
            .create(<MainPage />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })



})