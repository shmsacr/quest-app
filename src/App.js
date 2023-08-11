import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/users/:userId" element={<User />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
