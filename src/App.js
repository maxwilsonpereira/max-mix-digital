import React, { Suspense } from 'react';
// npm i react-router-dom
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MenuIsOnProvider } from './context/menu';
import './localStorage';
import AboutCubePage from './pages/about-cube';

// LAZY LOADING NEXT PAGES:
// It will render the component ONLY WHEN / IF needed!
// React { Suspense } is required to wrap all the Routes.
const IntroPage = React.lazy(() => {
  return import('./pages/intro');
});
const ProjectsPage = React.lazy(() => {
  return import('./pages/projects');
});
const AboutPage = React.lazy(() => {
  return import('./pages/about');
});

function App() {
  return (
    <MenuIsOnProvider>
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <Switch>
            <Route path="/about-cube" component={AboutCubePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/" component={IntroPage} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </MenuIsOnProvider>
  );
}

export default App;
