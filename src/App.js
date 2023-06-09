import { Route,Routes,BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
