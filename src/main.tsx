import { render } from 'preact';
import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';

import './index.css';

const Main = () => (
  <Router>
    <AsyncRoute
      path="/"
      getComponent={() =>
        import('./pages/Home/index').then((module) => module.default)
      }
      // custom props being passed down
      text="toto"
    />
  </Router>
);

render(<Main />, document.getElementById('app')!);
