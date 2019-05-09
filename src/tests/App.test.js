import React from 'react'
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store'
import App from '../App';
import { mount } from "enzyme"
import { Provider } from 'react-redux';

const middlewares = []
const mockStore = configureStore(middlewares)

describe('should test App Component ', () => {
    // Test from create-react-app
    // it('renders without crashing', () => {
    //     const div = document.createElement('div');
    //     ReactDOM.render(<App />, div);
    //     ReactDOM.unmountComponentAtNode(div);
    // });

    it('App should mount with initialState', () => {
        const initialState = {
            home: {
                trendingGifs: [],
                trendingLoading: true
            }
        };
    
        const store = mockStore(initialState);
         mount( <Provider store={store}><App/></Provider>);
    })
    

})
