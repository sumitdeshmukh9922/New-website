import React from "react"

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg text-white bg-dark justify-content-between">
      <a className="navbar-brand text-success" href="#">Explore new places</a>

        <form class="form-inline p-2">
          <button className="btn btn-outline-success mr-sm-3" type="submit" href="#">
            SignIN
          </button>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" href="#">
            SignUP
          </button>
        </form>
      
    </nav>
    )

}

export default Navbar;