import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Todos from './components/Todos/Todos';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <Link to="/todos">Todos</Link>
            {/* <Link to="/albums">Albums</Link>
            <Link to="/comments">Comments</Link> */}
          </nav>
        </header>

        <Route path="/todos" component={Todos} />
        {/* <Route path="/albums" component={Albums} />
        <Route path="/comments" component={Comments} /> */}
      </div>
    </Router>
  );
}

export default App;
