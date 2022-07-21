import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Quiz from './pages/Quiz';
import Submit from './pages/Submit';
import Allanswer from './pages/Allanswer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
      </Routes>
      <Routes>
        <Route path="/Submit" element={<Submit />} />
      </Routes>
      <Routes>
        <Route path="/Allanswer" element={<Allanswer />} />
      </Routes>

    </Router>
  );
}

export default App