import "./App.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import NavBar from "./utils/navbar";
import authContext from "./authContext";
import { useEffect, useState } from "react";
import Login from "./screens/Login";
import configureInterceptor from "./utils/httpinterceptors";
import routes from "./route-config";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      setCurrentUser({
        username: localStorage.getItem("username"),
        token: token,
      });
    }
  }, []);

  function setUser(user) {
    setCurrentUser(user);
    localStorage.setItem("username", user.username);
    localStorage.setItem("token", user.token);
    navigate("/");
  }
  function logOut() {
    setCurrentUser();
    localStorage.clear();
    navigate("/login");
  }
  configureInterceptor(logOut);

  return (
    <authContext.Provider value={{ currentUser, setUser, logOut }}>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route
              path="/login"
              element={
                typeof currentUser !== "undefined" || currentUser != null ? (
                  <Navigate to="/" />
                ) : (
                  <Login />
                )
              }
            />
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  typeof currentUser === "undefined" || currentUser == null ? (
                    <Navigate to="/login" />
                  ) : (
                    <>
                      <div className="container">
                        <route.component />
                      </div>
                    </>
                  )
                }
              />
            ))}
          </Routes>
        </main>
      </div>
    </authContext.Provider>
  );
}

export default App;
