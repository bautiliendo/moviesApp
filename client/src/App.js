import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components/common/NavBar";
import { Footer } from "./components/common/Footer";
import { Home } from "./components/pages/Home/Home";
import { Movies } from "./components/pages/Movies/Movies";
import { TvShows } from "./components/pages/TvShows/TvShows";
import { MyLists } from "./components/pages/MyLists.js/MyLists";
import { Register } from "./components/pages/Register";
import { Login } from "./components/pages/Login";
import axios from "axios";
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from "./context/userContext";
import { Dashboard } from "./components/pages/Dashboard";

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="layout">
      <UserContextProvider>
    <NavBar />
    <Toaster  toastOptions={{duration: 2000}} />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/movies" element={ <Movies /> } />
        <Route path="/tvshows" element={ <TvShows /> } />
        <Route path="/mylists" element={ <MyLists /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
      </Routes>
    <Footer />
    </UserContextProvider>
    </div>
  );
}

export default App;
