import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './registerForm';
import renderer from 'react-test-renderer';

//smoke test
describe('renders without crashing',()=>{
    it('it renders without crashing',()=>{
        const div = document.createElement('div');

        ReactDOM.render(<RegisterForm />,div);
        ReactDOM.unmountComponentAtNode(div);
    })


//snapshot test
    it('renders the UI as expected', ()=>{
        const tree = renderer
            .create(<RegisterForm />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })



})