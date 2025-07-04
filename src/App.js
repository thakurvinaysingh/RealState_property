import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Home1 from './pages/Home1';
import Login from './pages/login';
import Register from './pages/Register';
import Contact from './pages/ContactUs';
import About from './pages/About';
import Property from './pages/properties';
import PropertyDeatails from './pages/PropertyDetails';
import Career from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermConditions from './pages/TermConditions';
import CookiePolicy from './pages/CookiePolicy';
import SupportPage from './pages/Support'
import Risks from './pages/RisksKey'
import HowItWork from './pages/HowItWork'
import Affiliate from './pages/AffiliateProgram'
import ListOfProperty from './pages/ListOfProperty'
import Dashboard from './pages/Dashboard'
import Investment from './pages/Investment'
import Transaction from './pages/Transaction'
import Withdraw from './pages/Withdraw'
import Account from './pages/Account'


function App() {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Property />} />
        <Route path="/list-property" element={<PropertyDeatails />} />
        <Route path="/career" element={<Career />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/key-risks" element={<Risks />} />
        <Route path="/how-it-works" element={<HowItWork />} />
        <Route path="/affiliate-program" element={<Affiliate />} />
        <Route path="/list-your-property" element={<ListOfProperty />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/account" element={<Account />} />
     
      </Routes>
  );
}

export default App;
