import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRouters } from '~/routers';
import { DefaultLayout } from '~/layouts/';

function App() {
  const [mode, setMode] = useState('Light');

  return (
    <div className="App" id={mode}>
      <Router>
        <Routes>
          {publicRouters.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
      <button onClick={() => setMode((prev) => (prev === 'Light' ? 'Dark' : 'Light'))}>Toggle</button>
    </div>
  );
}

export default App;
