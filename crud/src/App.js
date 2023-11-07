import logo from './logo.svg';
import './App.css';
import Userdata from './components/Userdata';
import Adduser from './components/Adduser';
import { Routes,Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import Edituser from './components/Edituser';

function App() {
  return (
    <div>

<Routes>
            <Route path='/' element={<Userdata/>}></Route>
            <Route path='/adduser' element={<Adduser/>}></Route>
            <Route path='/Edituser/:id' element={<Edituser/>}></Route>
          
            </Routes>
          
    </div>
  );
}

export default App;
