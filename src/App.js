import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FreelancerLogin from './screens/FreelancerLogin';
import Home from './screens/Home';
import Success from './screens/Success';


function App() {
  return (
    <div style={{ padding: '14px' }}>
    <BrowserRouter basename='/'>
      <Routes>
        <Route  path="/" element={<Home /> } />  
        <Route path="/freelancer-login" element={<FreelancerLogin />} />   
        <Route path="/success" element={<Success />} />   
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
