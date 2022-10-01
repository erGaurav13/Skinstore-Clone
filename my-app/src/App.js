import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './AllContext/AllRoutes';
import {Navbar} from "./Component/Navbar"
import { Footer } from './Component/Footer';
import {useContext} from "react"
import {AuthContext} from "./PrivateRoute/AuthContext"
import {PrivateRoute} from "./PrivateRoute/PrivateRoute"
function App() {
  const {isAuth}=useContext(AuthContext)
  return (
    <div >
        <Navbar />
      <AllRoutes/>

      {isAuth?<Footer/>:null}
     
    </div>
  );
}

export default App;
