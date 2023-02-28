import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./product";
class ListProduct extends Component {
  renderListProduct = () => {
    //duyet mang va render
    return this.props.ArrayProduct.map((item, index) => {
      return (
        <div key={index}>
          <Product key={item.maSP} product={item} />;
        </div>
      );
    });
  };
  render() {
    return <div className="d-flex">{this.renderListProduct()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    ArrayProduct: state.cartReducer.listProduct,
    keyword: state.cartReducer.keyword,
  };
};
export default connect(mapStateToProps, null)(ListProduct);
