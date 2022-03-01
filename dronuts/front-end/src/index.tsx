import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

/* Pages */
import App from './App';
import DonutStore from './components/DonutStore';
import DroneStatus from './components/DroneStatus';
import DonutAvailability from './components/DonutAvailability';
import LoadOrders from './components/LoadOrders';
import OrderStatus from './components/OrderStatus';
import PurchasesList from './components/PurchasesList';
import EmployeeNotificationSystem from './components/EmployeeNotificationSystem';
import DonutStoreCheckout from './components/DonutStoreCheckout';
import LoginPage from './components/LoginPage';
import AddDonutForm from './components/AddDonutForm';
import SignUpForm from './components/SignUpForm';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/store' element={<DonutStore />} />
        <Route path='/drones' element={<DroneStatus />} />
        <Route path='/adminstore' element={<DonutAvailability />} />
        <Route path='/loadinstructions' element={<LoadOrders />} />
        <Route path='/orderstatus' element={<OrderStatus />} />
        <Route path='/storeorderhistory' element={<PurchasesList />} />
        <Route path='/empnotsys' element={<EmployeeNotificationSystem />} />
        <Route path='/checkout' element={<DonutStoreCheckout />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/adddonut' element={<AddDonutForm />} />
        <Route path='/signup' element={<SignUpForm />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
