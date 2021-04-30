import React from "react"
import Card from "./Card"

const CardSec = () => {

    return(
        <section className="container bg-success">
      <div className="container">
        <div className="row p-4">
          <div className="col-4 p-3">
            <Card title="My Title1" cardText="Some text here" buttonText="BTN-1"/>
          </div>
          <div className="col-4 p-3">
            <Card title="My Title2" cardText="Some text here" buttonText="BTN-2"/>
          </div>
          <div className="col-4 p-3">
            <Card title="My Title3" cardText="Some text here" buttonText="BTN-3"/>
          </div>
          <div className="col-4 p-3">
            <Card title="My Title4" cardText="Some text here" buttonText="BTN-4"/>
          </div>
          <div className="col-4 p-3">
            <Card title="My Title5" cardText="Some text here" buttonText="BTN-5"/>
          </div>
          <div className="col-4 p-3">
            <Card title="My Title6" cardText="Some text here" buttonText="BTN-6"/>
          </div>
        </div>
      </div>
    </section>
    )
}

export default CardSec;