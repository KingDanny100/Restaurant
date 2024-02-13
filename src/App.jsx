import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { FoodProvider } from "./DataFolder/Context/FoodContext";
import Cart from "./Components/Cart/Cart";
import MainHome from "./Components/MainHome/MainHome";

function App() {
  return (
    <FoodProvider>
      {/* <Intro /> */}
      <BrowserRouter basename="/Restaurant/">
        <Navbar />
        <Routes>
          <Route exact path="/" Component={MainHome}/>
          <Route path="/cart" Component={Cart}/>
        </Routes>
      </BrowserRouter>
    </FoodProvider>
  );
}

export default App;
