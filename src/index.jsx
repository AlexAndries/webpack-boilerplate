import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Page from 'containers/app.page';
import configureStore from 'redux/store/configure-store';

import './style.scss';
import './favicon.ico';

const store = configureStore();

render(
    <Provider store={store}>
      <Page/>
    </Provider>,
    document.getElementById('root'),
);
