import { useContext } from 'react';
import { BrowserRouter as Router ,Routes,Route,Navigate} from 'react-router-dom';
import './App.css';
import Home from './componet/pages/Home';
import Login from './componet/pages/login/Login';
import Header from './componet/pages/navbar/Header';
import { AuthContext } from './context/AuthContext';

function App() {
  const {currentUser}= useContext(AuthContext)
  //const currentUser = true //false;
  const RequireAuth = ({children}) =>{
    return currentUser ? children : <Navigate to="/login"/>;
  };
  console.log(currentUser)
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
   <Route path="/login" element={<Login/>}/>
   <Route path="/" element={
    <RequireAuth>
   <Home/>
   </RequireAuth>
   }/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
