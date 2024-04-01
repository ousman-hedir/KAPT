import { Routes, Route } from "react-router-dom";
import Admin from "./pages/admin";
import { Header } from "./components";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Routes>
        <Route path="/admin/*" element={<Admin darkMode={darkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
