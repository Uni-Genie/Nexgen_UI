import React, { createContext, useState } from "react";
import Styled from "styled-components";
import Login from "./pages/Login";
import Toast from "./components/Toast";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Container = Styled.div`
height:100vh;
background-color:${(props) => props.bgColor};`;

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/chats",
    element: <Home />,
  },
  {
    path: "/inbox",
    element: <Home />,
  },
  {
    path: "/knowledgebase",
    element: <Home />,
  },
  {
    path: "/inbox",
    element: <Home />,
  },
  {
    path: "/settings",
    element: <Home />,
  },
  {
    path: "/leads",
    element: <Home />,
  },

  {
    path: "*",
    element: <div>route not found</div>,
  },
]);
export const ContextProvider = createContext(null);

export const App = () => {
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState({
    visible: 0,
    type: "success",
    message: "",
    transform: "translateX(400px)",
  });
  const colorTheme =
    theme === "light"
      ? {
          backPri: "#F5F5F5",
          backSec: "#FFFFFF",
          fontPri: "#000000",
          fontSec: "grey",
          mainColor: "rgb(0, 129, 180)",
        }
      : {
          backPri: "#282828",
          backSec: "#1A1A1A",
          fontPri: "#FFFFFF",
          fontSec: "#F5F5F5",
          mainColor: "rgb(0, 129, 180)",
        };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  var x;
  const setNotification = (type, message) => {
    clearTimeout(x);

    setAlert({
      visible: 1,
      type: type,
      message: message,
      transform: "translateX(0px)",
    });

    x = setTimeout(() => {
      removeNotification();
    }, 3000);
  };
  const removeNotification = () => {
    setAlert((item) => {
      return { ...item, transform: "translateX(400px)" };
    });
  };

  return (
    <ContextProvider.Provider
      value={{
        theme,
        toggleTheme,
        alert,
        setNotification,
        removeNotification,
        colorTheme,
      }}
    >
      <Container bgColor={colorTheme.backPri}>
        <RouterProvider router={router} />
        <Toast />

        {/* <div onClick={() => toggleTheme()}>toggle</div>
        <div onClick={() => setNotification("failure", "Log In failed")}>
          failure
        </div>
        <div
          onClick={() => setNotification("success", "Logged In Successfully")}
        >
          Success
        </div> */}
      </Container>
    </ContextProvider.Provider>
  );
};

export default App;
