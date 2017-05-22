import React from 'react';

const Navbar = () => {

  return (
    <div className="navbar-div">
      <nav className="navbar navbar-light bg-faded">
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
