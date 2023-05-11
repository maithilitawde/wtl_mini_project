import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./pages/home/home"
import Login from "./pages/login/login";
import BankAccountForm from "./pages/account/account";
import CardForm from "./pages/card/card";
import AboutUs from "./pages/aboutus/aboutus";
import Transaction from "./pages/transaction/transaction";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element= {<Home/>}/>
        <Route path = "/login" element= {<Login/>}/>
        <Route path="/account" element = {<BankAccountForm/>}/>
        <Route path = "/card" element= {<CardForm/>}/>
        <Route path = "/aboutus" element= {<AboutUs/>}/>
        <Route path = "/transaction" element= {<Transaction/>}/>


 

      </Routes>
    </BrowserRouter>
  )
}

export default App
