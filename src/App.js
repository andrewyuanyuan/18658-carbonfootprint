import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SignIn from './pages/login';

import ProjectGallary from './pages/projectGallary';
import AccountDashboard from './pages/accountDashboard';
import Projects from './pages/projects';
import ProjectDetail from './pages/projectDetail';

import Test from './pages/test';
import LoadMockData from './utils/load-mock-data';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Album() {
  LoadMockData();
  return (
    <Provider store={store}>
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ProjectGallary />} />
            <Route exact path="/dashboard" element={<AccountDashboard />} />
            <Route exact path="/login" element={<SignIn />} />
            <Route exact path="/test" element={<Test />} />
            <Route exact path="/projects/:category" element={<Projects />} />
            <Route exact path="/projects/:category/:id" element={<ProjectDetail />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  );
}

export default Album;
