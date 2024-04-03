import { Routes, Route } from "react-router-dom";
import Admin from "./pages/admin";
import { Header } from "./components";
import { useState } from "react";
import Ceo from "./pages/ceo";
import Home from "./pages/HomePage";
import GFM from "./pages/generalFarmMang";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
		<div className={darkMode ? "dark" : "light"}>
			<Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
			<Routes>
				<Route path="/" element={<Home darkMode={darkMode} />} />
				<Route path="/admin/*" element={<Admin darkMode={darkMode} />} />
				<Route path="/ceo/*" element={<Ceo darkMode={darkMode} />} />
				<Route path="/gfm/*" element={<GFM darkMode={darkMode}/>}/>
			</Routes>
		</div>
	);
}

export default App;
