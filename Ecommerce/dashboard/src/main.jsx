import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import { Provider } from "react-redux";
import store from "./store";
import { Toaster } from "react-hot-toast";
const DashBoardApp = lazy(() => import("./DashBoardApp"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
    <Suspense>
      <DashBoardApp />
      <Toaster 
        toastOptions={{
          position: 'top-right',
          style: {
            background: '#283046',
            color: 'white'
          }
        }}
      />
    </Suspense>
    </Provider>
  </BrowserRouter>
);
