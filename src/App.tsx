import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodosPage';
import { UsefulLinksPage } from './pages/UsefulLinksPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" />
          <Route component={UsefulLinksPage} path="/useful-links" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
