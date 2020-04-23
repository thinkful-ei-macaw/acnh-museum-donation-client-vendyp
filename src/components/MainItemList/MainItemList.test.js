import React from 'react';
import ReactDOM from 'react-dom';
import MainItemList from './MainItemList';
import renderer from 'react-test-renderer';

//smoke test
describe('renders without crashing',()=>{
    it('it renders without crashing',()=>{
        const div = document.createElement('div');

        ReactDOM.render(<MainItemList />,div);
        ReactDOM.unmountComponentAtNode(div);
    })


//snapshot test
    it('renders the UI as expected', ()=>{
        const tree = renderer
            .create(<MainItemList />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })



})