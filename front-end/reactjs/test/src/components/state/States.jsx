import { logDOM } from "@testing-library/react";
import React, { Component } from "react";
import hinh1 from "../../assets/images/hinh1.webp";
export default class TestState extends Component {
  state = {
    img: "",
  };
  changeImg = (img) => {
    console.log(1234);
    this.setState({
      img: img,
    });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <img src={this.state.img} alt="img" />
          </div>
          <div className="col-sm-6">
            <div
              onClick={() =>
                this.changeImg(
                  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/u7khoqev6hy2xgsllrnb/revolution-5-road-running-shoes-szF7CS.png"
                )
              }
            >
              <img
                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/u7khoqev6hy2xgsllrnb/revolution-5-road-running-shoes-szF7CS.png"
                alt="image"
              />
            </div>
            <div
              onClick={() =>
                this.changeImg(
                  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-on-shoes-1637184473.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
                )
              }
            >
              <img
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-on-shoes-1637184473.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
                alt="image"
              />
            </div>
            <div
              onClick={() =>
                this.changeImg(
                  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35c49d34-c876-4d16-b4c7-6fd06a48063b/kyrie-infinity-ep-basketball-shoe-8H6qCV.png"
                )
              }
            >
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35c49d34-c876-4d16-b4c7-6fd06a48063b/kyrie-infinity-ep-basketball-shoe-8H6qCV.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
