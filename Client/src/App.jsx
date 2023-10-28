import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import navlogo from './assets/navlogo.png'
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
  <div className="flex items-center">
    <img src={navlogo} alt="logo" className="w-7 object-contain" />
    <span className="ml-2 text-lg font-bold font-semibold">DEVIL-AI</span>
  </div>
</Link>
      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create-Image</Link>
      
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
    </BrowserRouter>
  );
};

export default App;
