import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refresh } from '~/redux/thunk/userThunk';

import { publicRouters } from '~/routers';
import DefaultLayout from '~/layout/defaultLayout';

import './app.css';
import Toaster from '~/components/Toaster';
import ProtectedRouter from './util/ProtectedRouter';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh({ refreshToken: true }));
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        {publicRouters.map((route, index) => {
          const Page = route.component;

          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return route.requireLogin ? (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRouter>
                  <Layout>
                    <Page />
                    <Toaster />
                  </Layout>
                </ProtectedRouter>
              }
            />
          ) : (
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
  );
}

export default App;
