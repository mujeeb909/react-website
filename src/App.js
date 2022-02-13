import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Switch, Redirect} from 'react-router-dom';
import {Home} from "./myComp/Home";
import {About} from "./myComp/About";
import {Services} from "./myComp/Services";
import {Contact} from "./myComp/Contact";
import {Menu} from "./myComp/Menu";
import { Footer } from './myComp/Footer';



function App() {
  return (
    <div className="">
        
        <Menu/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        {/* <Route component={Error} /> */}
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
