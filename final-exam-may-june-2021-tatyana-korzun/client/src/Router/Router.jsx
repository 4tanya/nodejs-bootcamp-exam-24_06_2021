import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "../AuthProvider";
import LoginPage from "../Login";
import PrivateRoute from "../PrivateRoute";
import HomePage from "../Home";
import SaveFormPage from "../SaveForm";

export default function AuthExample() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/home">
            <HomePage />
          </PrivateRoute>
          <PrivateRoute path="/add-car">
            <SaveFormPage />
          </PrivateRoute>
          <PrivateRoute path="*">
            <HomePage />
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}
