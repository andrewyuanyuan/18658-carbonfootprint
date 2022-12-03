import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SignIn from './pages/login';

import ProjectGallary from './pages/projectGallary';
import AccountDashboard from './pages/accountDashboard';
import Projects from './pages/projects';
import ProjectDetail from './pages/projectDetail';
import ProjectInvest from './pages/projectInvest';

import Balance from './pages/carbondashboard/balance';
import Customization from './pages/carbondashboard/customization';
import EmissionQuota from './pages/carbondashboard/emissionQuota';
import Recent from './pages/carbondashboard/recent';
import Transaction from './pages/carbondashboard/transaction';

import FundrasingRecent from './pages/fundraisingdashboard/recent';
import FundrasingProgres from './pages/fundraisingdashboard/progress';
import FundrasingCustomization from './pages/fundraisingdashboard/customization';
import FundrasingBackActivity from './pages/fundraisingdashboard/bankactivity';

import Test from './pages/test';
import store from './store';

import PostProject from './pages/postProject';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Album() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ProjectGallary />} />

            <Route exact path="/dashboard" element={<Recent />} />
            <Route exact path="/customization" element={<Customization />} />
            <Route exact path="/transactions" element={<Transaction />} />
            <Route exact path="/balance" element={<Balance />} />
            <Route exact path="/emissionquota" element={<EmissionQuota />} />

            <Route exact path="/dashboard-fundrasing" element={<FundrasingRecent />} />
            <Route exact path="/progress-fundrasing" element={<FundrasingProgres />} />
            <Route exact path="/customization-fundrasing" element={<FundrasingCustomization />} />
            <Route exact path="/bank-activity" element={<FundrasingBackActivity />} />

            <Route exact path="/login" element={<SignIn />} />
            <Route exact path="/test" element={<Test />} />
            <Route exact path="/projects/:category" element={<Projects />} />
            <Route exact path="/projects/:category/:id" element={<ProjectDetail />} />
            <Route exact path="/projects/investment/:category/:id" element={<ProjectInvest />} />
            
            <Route exact path="/postProject" element={<PostProject />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  );
}

export default Album;
