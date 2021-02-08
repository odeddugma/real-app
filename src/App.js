import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Signup from './components/signup';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header><Navbar /></header>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
      </Switch>
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
