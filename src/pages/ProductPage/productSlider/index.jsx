import React, { Component } from "react";
import Slider from "react-slick";


import ProductBar from "../../../elements/productBar";
import img1 from "../testImg/1.jpg";
import img2 from "../testImg/2.jpg";
import img3 from "../testImg/3.jpg";
import img4 from "../testImg/4.jpg";
import defImg from "../testImg/defImg.png";
import "./style-theme.css";
import "./style.css";

export default class AsNavFor extends Component {
  constructor() {
    super();
    this.state = {
      nav1: null,
      nav2: null,
      currentSlide: 0,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  handleBeforeChange = (oldIndex, newIndex) => {
    this.setState({
      currentSlide: newIndex,
    });
  };

  render() {
    const windowWidth = window.innerWidth;
    const imgArray = Array.isArray(this.props.data.pictures) ? this.props.data.pictures : [];
    const filledArray = [...imgArray];
    if (imgArray.length < 7) {
      for (let i = imgArray.length; i < 7; i++) {
        filledArray.push(defImg);
      }
    }
    const slidesToShow =
      windowWidth < 500
        ? 3
        : windowWidth < 800
        ? 4
        : windowWidth < 1400
        ? 5
        : 6;

    return (
      <div className="SliderBox">
        <div className="barForSlider">
          <ProductBar data={this.props.data} discount={this.props.data.discount} top={this.props.data.hot} newProd={this.props.data.is_new} />
        </div>
        <Slider
          className="firstSlider"
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          {filledArray.map((elem, i) => (
            <div className="mainImg" key={i}>
              <img src={elem} alt="" />
            </div>
          ))}
        </Slider>
        <Slider
          className="secondSlider"
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={slidesToShow}
          swipeToSlide={true}
          focusOnSelect={true}
          beforeChange={this.handleBeforeChange}
        >
          {filledArray.map((elem, i) => (
            <div className="smallImg" key={i}>
              <img
                className={`${i === this.state.currentSlide ? "active" : ""}`}
                src={elem}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
