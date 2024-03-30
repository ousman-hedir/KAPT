import { Routes, Route } from "react-router-dom";
import Admin from "./pages/admin";
import { Header } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
