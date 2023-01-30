import './App.css';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';

import Home from "./Views/Home";
import Photography from './Views/Photography';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Photography' element={<Photography/>}/>
      </Routes>
    </Router>

  );
};

export default App;
