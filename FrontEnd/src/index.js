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
import { PostProvider } from "./Context/PostsContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <LoaderProvider>
        <ProfileProvider>
            <AuthProvider>
              <PostProvider>
                <App />
              </PostProvider>
            </AuthProvider>
        </ProfileProvider>
        </LoaderProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
