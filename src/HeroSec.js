import React from "react"
import { GoogleApiWrapper } from 'google-maps-react';
import Map from "./Map"

const HeroSec = () => {

    return(
        <div class="container jumbotron bg-success text-center hoverable p-4">
          <div class="row">
            <div class="col-md-7 text-md-left ml-3 mt-3">
              
              <h4 class="h4 mb-4">Some Title here</h4>

              <p class="font-weight-normal">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
              <p class="font-weight-normal">by <a><strong>Carine Fox</strong></a>, 19/08/2016</p>
            </div>


            <div class="col-md-4 offset-md-1 mx-4 my-3">
              <div class="view overlay">
                <img src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" class="img-fluid" alt="Sample image for first version of blog listing"></img>
                  <a>
                    <div class="mask rgba-white-slight"></div>
                  </a>
              </div>
            </div>

          </div>
        </div>
    )
}

export default HeroSec;




