import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Footer from "./components/Footer/Footer";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Context } from "./context/Context";
import { useContext } from "react";

function App() {

  // const user = true;
  const {user} = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register"> {user ? <Home /> : <Register />} </Route>
        <Route path="/login"> {user ? <Home /> : <Login />} </Route>
        <Route path="/write"> {user ? <Write /> : <Register />} </Route>
        <Route path="/settings"> {user ? <Settings /> : <Register />} </Route>
        <Route path="/post/:id"> <Single /> </Route>
      
      </Switch>
      {/* <Footer />  */}
    </Router>
  );
}

export default App;
