import React, { Component } from "react";
import { connect } from "react-redux";

class Product extends Component {
  render() {
    let { product } = this.props;
    // console.log({ product });
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={product.hinhAnh}
            width={100}
            height={200}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{product.tenSP}</h5>
            <div className="card-text">
              <div> {product.manHinh}</div>
              <div> {product.heDieuHanh}</div>
              <div> {product.cameraTruoc}</div>
              <div> {product.cameraSau}</div>
              <div> {product.ram}</div>
              <div> {product.rom}</div>
              <div> {product.giaBan}</div>
            </div>
            <button
              onClick={() => this.props.detailProduct(product)}
              href="#"
              className="btn btn-primary"
            >
              Detail
            </button>
            <button
              onClick={() => this.props.addProduct(product)}
              href="#"
              className="btn btn-danger"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    detailProduct: (product) => {
      const action = {
        type: "GET",
        payload: product,
      };
      dispatch(action);
    },
    addProduct: (product) => {
      const action = {
        type: "ADD",
        payload: product,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(Product);
