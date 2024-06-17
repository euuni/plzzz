import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 하나의 import 문으로 합치기
import Login from './components/Login';
import Membership from './components/Membership';
import Membership2 from './components/Membership2';
import Mypage from './components/Mypage';
import Homepage from './components/Homepage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/membership2" element={<Membership2 />} />
          <Route path='/homepage' element={<Homepage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
