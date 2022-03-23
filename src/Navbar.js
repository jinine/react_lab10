import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <>
    <nav className="navbar navbar-expand-md bg-light navbar-light">
      <a className="navbar-brand" href="/">FizzBuzzWeb</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <Link to="/Privacy">Privacy</Link>
            </li>
          </ul>
        
        </div>
          
          </ul> 
        </div>
    </nav>
  </>
);
export default NavBar;
