import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
//import "./index.css";

export default class Slick extends React.Component {
  render() {
    var settings = {
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2
    };

    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    );
  }
}


