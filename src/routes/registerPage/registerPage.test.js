import React from 'react';
import ReactDOM from 'react-dom';
import RegisterPage from './registerPage';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
//smoke test
describe('renders without crashing',()=>{
    it('it renders without crashing',()=>{
        const div = document.createElement('div');

        ReactDOM.render(<MemoryRouter><RegisterPage /></MemoryRouter>,div);
        ReactDOM.unmountComponentAtNode(div);
    })


//snapshot test
    it('renders the UI as expected', ()=>{
        const tree = renderer
            .create(<MemoryRouter><RegisterPage /></MemoryRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })



})