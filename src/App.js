import React from "react";
import Helmet from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./components/topbar/Topbar";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/pages/Home";
import Elaborations from "./components/pages/Elaborations";
import Collaborations from "./components/pages/Collaborations";
import Contacts from "./components/pages/Contacts";
import PrivateGallery from "./components/pages/PrivateGallery";
import Fabrics from "./components/pages/Fabrics";
import Footer from "./components/pages/Footer";
import ScrollTop from "./ScrollTop";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>FCS Emanuela Naccarati</title>
        <meta
          name="description"
          content="Fabric Consulting Services"
          data-react-helmet="true"
        />
        <link rel="canonical" href="http://fabricservices.it" />
      </Helmet>
      <Router>
        <ScrollTop />
        <div className="phantom">
          <div className="container-top-bar">
            <TopBar />
          </div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/fabrics" component={Fabrics} />
            <Route exact path="/privategallery" component={PrivateGallery} />
            <Route exact path="/elaborations" component={Elaborations} />
            <Route exact path="/collaborations" component={Collaborations} />
            <Route exact path="/contacts" component={Contacts} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
