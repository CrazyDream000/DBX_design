import logo from './logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import Dashboard from './component/Dashboard';
import TransactionList from './component/TransactionList';
import AddressDetail from './component/AddressDetail';

import Addresses from './component/Addresses';
import Pending from './component/Pending';
import Tokens from './component/Tokens';
import Transaction from './component/Transaction';
import Document from './component/Document';

import Aos from 'aos';
import React,{useEffect} from "react";
import "@fontsource/inter";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route index element={<Dashboard />} />
            <Route path="blocks" element={<TransactionList />} />
            <Route path="trans" element={<Transaction />} />
            <Route path="tokens" element={<Tokens />} />
            <Route path="api" element={<Document />} />
            <Route path="DBX" element={<Addresses />} />
        </Routes>
      <Footer />
      </BrowserRouter>
      <div className='text-sm text-gray-400 p-10'>opyright© 2017-2022 dbxscan.com</div>
    </div>
  );
}

export default App;
