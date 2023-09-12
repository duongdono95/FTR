import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(87, 182, 178)",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "12px",
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterProvider router={router} />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
