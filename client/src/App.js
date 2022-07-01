import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { publicRouters } from '~/routers';
import DefaultLayout from '~/layout/defaultLayout';

import './app.css';
import Toaster from '~/components/Toaster';

axios.defaults.baseURL = 'http://localhost:8080';

function App() {
  return (
    <div>
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
                    <Toaster />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
