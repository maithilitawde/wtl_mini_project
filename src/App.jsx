import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./pages/home/home"
import Login from "./pages/login/login";
import BankAccountForm from "./pages/account/account";
import CardForm from "./pages/card/card";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element= {<Home/>}/>
        <Route path = "/login" element= {<Login/>}/>
        <Route path="/account" element = {<BankAccountForm/>}/>
        <Route path = "/card" element= {<CardForm/>}/>
 

      </Routes>
    </BrowserRouter>
  )
}

export default App
