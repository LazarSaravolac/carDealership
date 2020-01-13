import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cars from './Pages/Cars';
import SingleCar from './Pages/SingleCar';
import ErrorPage from './Pages/ErrorPage';
function App() {
  return (
    <div >
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/singleCar/:slug" component={SingleCar} />
        <Route exact path="/" component={Cars} />
        <Route  component={ErrorPage}/>
      </Switch>
    </div>
  );
}

export default App;
