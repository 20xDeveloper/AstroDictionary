import './App.css';
import { Routes, Route } from "react-router-dom"; //make sure to import all the components.
import Layout from "./hoc/layout";
import Home from "./containers/Home/Home.js";
import 'bootstrap/dist/css/bootstrap.min.css';



function App_routes() {
  return (
  
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
					
   
  );
}

export default App_routes;
