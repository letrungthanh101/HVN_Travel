import './App.css';

import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
// import NotFound from './Components/NotFound';
import { Redirect, Route, Switch } from 'react-router';

function App() {
  const Home = React.lazy(() => import('./Pages/Home'));

  const Login = React.lazy(() => import('./Features/Auth/Login'));
  const Register = React.lazy(() => import('./Features/Auth/Register'));

  return (
    <div className="App">
      <React.Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Redirect path="/home" to="/" component={Home} exact />

          <Route path="/sign-up" component={Register} exact />

          <Route path="/login" component={Login} exact />
        </Switch>
      
      </React.Suspense>
    </div>
  );
}

export default App;
