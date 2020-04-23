import React from 'react';
import ReactDOM from 'react-dom';
import AddItemPage from './AddItemPage';
import { MemoryRouter } from 'react-router-dom';
//smoke test
describe('renders without crashing',()=>{
    it('it renders without crashing',()=>{
        const div = document.createElement('div');

        ReactDOM.render(<MemoryRouter><AddItemPage history={{}}/></MemoryRouter>,div);
        ReactDOM.unmountComponentAtNode(div);
    })



})