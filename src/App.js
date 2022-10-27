import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About";
import Login from "./pages/Login/Login";


function App() {
  return (
    <div className="App">
     <BrowserRouter >
      <Routes>
         <Route path="/"  element={<Login />}  />
         <Route path="/home"  element={<Home />}  />
         <Route path="/about"  element={<About />}  />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
