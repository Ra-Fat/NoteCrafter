import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home/>}/>
                <Route path="/SignUp" element= {<SignUp/>}/>
                <Route path="/SignIn" element= {<SignIn/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
