import React, { Component } from "react"
import './App.css'

const AppSec = () => (
    <div className="container bg-success text-center">
      <p className="display-4 text-white p-4">Discover the amazing new Places</p>
      
        <form className="container">
         <div className="row p-4">
            <div className="form-group col-md-9">
              <input id="exampleFormControlInput5" type="search" placeholder="What're you looking for?" className="form-control"/>          
            </div>
          
            <div className="form-group col-md-2">
              <button type="submit" className="btn btn-primary rounded-pill btn-block shadow-sm">Search</button>
            </div>
          </div>
        </form>
    </div>
)

export default AppSec;