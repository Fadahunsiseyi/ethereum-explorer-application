import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

afterEach(() => cleanup());

describe('Test App.js', () => {
  it('Test if the page loads', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
