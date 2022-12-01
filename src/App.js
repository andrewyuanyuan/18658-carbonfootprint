import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PostJob from './pages/postJob';
import Profile from './pages/profile';
import SendEmail from './pages/sendEmail';
import SignIn from './pages/login';
import JobList from './pages/jobList';
import MyApplication from './pages/myApplication';
import ReferRequest from './pages/referRequest';
import Counter from './pages/counter/Counter';
import Settings from './pages/setting';
import Page404 from './pages/404';
import Test from './pages/test';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Album() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<JobList />} />
            <Route exact path="/post-job" element={<PostJob />} />
            <Route exact path="/my-refer" element={<ReferRequest />} />
            <Route exact path="/my-application" element={<MyApplication />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/login" element={<SignIn />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/404" element={<Page404 />} />
            <Route exact path="/redux-example" element={<Counter />} />
            <Route exact path="/test" element={<Test />} />
            <Route exact path="/sendemail" element={<SendEmail />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  );
}

export default Album;
