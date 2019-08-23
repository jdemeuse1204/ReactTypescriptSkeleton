import * as React from 'react';
import { AppContext } from '../../AppStateProvider';
import './Test.scss';

const Test = () => (
  // This is the other way to consume context, more cumbersome.
  // Showing do dev's know it
  <AppContext.Consumer>
    {
      (context) => (
        <div id="test-page-container">
          <h1>Test Page</h1>
          <br/>
          State Id Value:
          <br/>
          <div>{context.state.Id}</div>
        </div>
      )
    }
  </AppContext.Consumer>
);

export default Test;