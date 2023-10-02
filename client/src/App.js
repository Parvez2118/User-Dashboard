import { BrowserRouter ,Routes, Route} from 'react-router-dom';  
import './App.css';
import UserDashboard from './component/UserDashboard';
import Front from './component/Front';
import Login from './component/Login';
import Signup from './component/Signup';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Front/>}></Route>
    <Route exact path='/userdash' element={<UserDashboard/>}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
    <Route exact path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
 
    
    </>
  );
}

export default App;
