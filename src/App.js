import { Redirect, BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Dashboard from "./component/Dashboard/dashboard.jsx";
import Header from "./component/Header/header.jsx";
import './App.css'
import Footer from "./component/Footer/footer.js";
function App() {
  return (
    <>
      <BrowserRouter>
      <Route exact from="/header" component={Header} />
        <Switch>
          <Route exact from="/" component={Dashboard} />
        </Switch>
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
