import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './AllContext/AllRoutes';
import {Navbar} from "./Component/Navbar"
import { Footer } from './Component/Footer';
function App() {
  return (
    <div >
        <Navbar/>
      <AllRoutes/>
      <Footer/>
     
    </div>
  );
}

export default App;
