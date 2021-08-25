import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { ProfileProvider } from "./Context/ProfileContext";
import { LoaderProvider } from "./Context/LoaderContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ProfileProvider>
          <AuthProvider>
            <LoaderProvider>
              <App />
            </LoaderProvider>
          </AuthProvider>
        </ProfileProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
