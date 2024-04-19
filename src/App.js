
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import LogIn from "./components/LogIn";
import { BrowserRouter,Routes,Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Header/>
    <BrowserRouter>
    <h1>hello routing</h1>
    <Routes>
    <Route path="/" element={<LogIn/>} />
      <Route path="/SignIN" element={<SignIn/>} />  
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
