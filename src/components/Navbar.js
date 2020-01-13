

import img from '../images/logoF.jpg';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { FaAlignRight } from 'react-icons/fa';
export default class Navbar extends Component {

    state = {
        isOpen: false
    }

    handleToggle =  () => {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

  render (){
  return(
    <nav className="navbar">
          <div className="nav-center">
              <div className="nav-header">
                    <Link to="/">
                    <img src={img} alt=""/>
                    </Link>
                 
                  <button type="button" className="nav-btn">
                      <FaAlignRight className="nav-btn" onClick={this.handleToggle}/>
                  </button>
              </div>
              <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                  <li><Link to="/">Pocetna</Link> </li>
                  <li><Link to="/">Automobili</Link></li>
              </ul>
          </div>
          
      </nav>

      
       )
  };
}
