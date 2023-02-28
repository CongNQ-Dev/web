import React, { Component } from "react";
import { connect } from "react-redux";
import ListProduct from "./listProduct";
import Models from "./model";

class Mains extends Component {
  render() {
    let { detailProduct } = this.props;
    // console.log(detailProduct);
    return (
      <div>
        <ListProduct />

        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <img
                className="img-fluid"
                src={this.props.detailProduct.hinhAnh}
                alt=""
              />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{this.props.detailProduct.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{this.props.detailProduct.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{this.props.detailProduct.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{this.props.detailProduct.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{this.props.detailProduct.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{this.props.detailProduct.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Models />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detailProduct: state.cartReducer.detailProduct,
  };
};
export default connect(mapStateToProps, null)(Mains);
