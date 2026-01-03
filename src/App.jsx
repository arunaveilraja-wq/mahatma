import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Admission from "./Components/admission";
import Topbar from "./Components/Topbar";
import Foundation from "./Components/Foundation";
import Career from "./Components/Career";
import { Route,Routes } from "react-router-dom";
import Sidenav from "./Sidenav";



function App() {
  return (
    <div >
      
   <Topbar />
   <Sidenav/>
   
  
    <main>
      <Routes>
       <Route index element={<Home />}/>
       <Route path="/foundation" element={<Foundation />}/>
       <Route path="/about" element={<About />}/>
       <Route path="/admission" element={<Admission />}/>
       <Route path="/career" element={<Career/>}/>

      </Routes>
    </main>
     
    </div>
  );
}

export default App;
