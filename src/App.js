import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication.js";

//context
import { AuthProvider } from "./context/AuthContext.js";

// pages
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Register from "./pages/Register.js/Register.js";
import Login from "./pages/Login/Login.js";
import CreatePost from "./pages/CreatePost/CreatePost.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Search from "./pages/Search/Search.js";

function App() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />}/>
              <Route path="/search" element={<Search />}/>
              <Route path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
              />
              <Route path="/register" 
              element={!user ? <Register /> : <Navigate to="/" />} 
              />
              <Route path="/posts/create" 
              element={user ? <CreatePost /> : <Navigate to="/login" />} 
              />
              <Route path="/dashboard" 
              element={user ? <Dashboard /> : <Navigate to="/login" />} 
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
