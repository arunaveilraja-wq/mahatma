import "./App.css";
import About from "./Compoents/About";
import Home from "./Compoents/Home";
import Admission from "./Compoents/admission";
import Topbar from "./Compoents/Topbar";
import Foundation from "./Compoents/Foundation";
import Career from "./Compoents/Career";
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
