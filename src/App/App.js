import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilimoMain from "../pages/FilimoMain/FilimoMain";
import FilimoIrancell from "../pages/FilimoIrancell/FilimoIrancell";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FilimoMain />} />
          <Route path="/FilimoIrancell" element={<FilimoIrancell />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
