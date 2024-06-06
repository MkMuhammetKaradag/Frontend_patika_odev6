import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen ">
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route index element={<Home></Home>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
