import './App.css';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';

import Home from "./Views/Home";
import Photography from './Views/Photography';
import AppFooter from './Components/AppFooter';
import AppHeader from './Components/AppHeader';

const App = () => {
  return(
    
      <div >
        
        <Router>
        <AppHeader></AppHeader>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Photography' element={<Photography/>}/>
        </Routes>
        <AppFooter></AppFooter>
      </Router>
        
        
        
      </div>
      

  );
};

export default App;
