import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./Views/Home/Home";
import Landing from "./Views/Landing/Landing";
import About from "./Views/About/About";
import Detail from "./Views/Detail/Detail";
import Nav from "./Components/Nav/Nav";
import Favorites from "./Components/Favorites/Favorites";


function App() {
  const [characters, setCharacters] = useState([]);

  let location = useLocation();

  const username = 'gianpolastri@gmail.com'
  const password = 'Hola1234'

  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001/rickandmorty";
    // const KEY = "9d97e1f1346d.2db9fae612b2d7eede69";
    // const URL = "https://be-a-rym.up.railway.app/api"

    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Algo salió mal");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  let navigate = useNavigate()

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      navigate('/home');
    }else {
      alert("Credenciales incorrectas");
    }
  }

  return (
    <div className="App" style={{ padding: '25px' }}>
      
      {location.pathname !== '/' && <Nav onSearch={onSearch} location={location}/>}
      
      <Routes>
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/" element={<Landing  login={login}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
