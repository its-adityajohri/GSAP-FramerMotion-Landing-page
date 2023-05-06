import react from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import {Route} from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Home/>}/>
        <Route path='/register' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
