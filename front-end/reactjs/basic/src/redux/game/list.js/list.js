import React, { Component } from "react";
import { connect } from "react-redux";
import { datCuocAction } from "../../reducer/action/action";
class List extends Component {
  renderDanhSachCuoc = () => {
    // console.log(this.props.ListCuoc);
    return this.props.ListCuoc.map((item, index) => {
      return (
        <div key={index} className="col-4">
          <button
            className="text-center"
            onClick={() => {
              this.props.datCuoc(item);
            }}
          >
            <img src={item.hinhAnh}></img>
            <br />
            <span>{item.diemCuoc}</span>
          </button>
        </div>
      );
    });
    // return this.props.ListCuoc.
  };
  render() {
    return (
      <div>
        <div className="container">
          .<div className="row">{this.renderDanhSachCuoc()}</div>
        </div>
      </div>
    );
  }
}
//ham lay cac gia tri tu kho do ra. " tat ca cac gia tri state"
const mapStateToProps = (state) => {
  return {
    ListCuoc: state.BauCuaTomCaReducer.danhSachCuoc,
  };
};
const mapDispatcherToProps = (dispatch) => {
  return {
    datCuoc: (quanCuoc) => {
      dispatch(datCuocAction(quanCuoc));
    },
  };
};
