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
        <Route path="/" component={Home} />
        <Route path="/singleCar/:slug" component={SingleCar} />
        <Route path="/" component={Cars} />
        <Route  component={ErrorPage}/>
      </Switch>
    </div>
  );
}

export default App;
