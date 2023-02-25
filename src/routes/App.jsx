import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout.jsx';
import NewPassword from '../pages/NewPassword.jsx';
import Login from '../pages/Login.jsx';
import RecoveryPassword from '../pages/RecoveryPassword.jsx';
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound.jsx';
import '../styles/global.css';
import CreateAccount from '../pages/CreateAccount.jsx';
import MyAccount from '../pages/MyAccount.jsx';
import Checkout from '../pages/Checkout.jsx';
import Orders from '../pages/Orders.jsx';
import SendEmail from '../pages/SendEmail.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/new-password" element = {<NewPassword />} />
                    <Route exact path="/login" element = {<Login />} />
                    <Route exact path="/create-account" element = {<CreateAccount />} />
                    <Route exact path="/my-account" element = {<MyAccount />} />
                    <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                    <Route exact path='/checkout' element ={<Checkout />} />
                    <Route exact path='/orders' element ={<Orders />} />
                    <Route exact path='/send-email' element ={<SendEmail />} />
                    <Route path= "*" element={<NotFound />} />
                </Routes>
            </Layout>     
        </BrowserRouter>
    );
}

export default App;