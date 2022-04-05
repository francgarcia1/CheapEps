import "./App.css";
import { useState, useEffect } from "react";
import { datosH, datosIS } from "./data/Info";
import Artificiales from "./pages/Artificiales";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Naturales from "./pages/Naturales";
import RegisterForm from "./pages/RegisterForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Recomendation from "./components/Recomendation/Recomendation";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [usuario, setUsuario] = useState([]);
  const usuarioCol = collection(db, "usuarios");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usuarioCol);
      setUsuario(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  const nombre = usuario.slice(0, 1).map((user) => {
    return user.nombre;
  });
  return (
    <>
      <Provider store={store({})}>
        <Router>
          <NavBar nombre={nombre} />
          <Routes>
            <Route
              path="/naturales"
              element={<Naturales info={datosH[1]} azucares={datosIS[0]} />}
            ></Route>
            <Route
              path="/artificiales"
              element={<Artificiales info={datosH[2]} azucares={datosIS[1]} />}
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<RegisterForm />}></Route>
            <Route path="/" element={<Home info={datosH[0]} />}></Route>
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
