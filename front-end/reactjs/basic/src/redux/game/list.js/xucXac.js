import React, { Component } from "react";
import { connect } from "react-redux";
import { playGameAction } from "../../reducer/action/action";

class XucXac extends Component {
  renderXucXac = () => {
    return this.props.xucXac.map((item, index) => {
      return (
        <div key={index}>
          <img src={item.hinhAnh} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button onClick={() => this.props.playGame()}>play game</button>
          </div>
          <div className="col-8">
            <div className="text-center">{this.renderXucXac()}</div>
          </div>
          <div className="col-4">
            <div className="text-center">{this.props.tongTien}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      dispatch(playGameAction());
    },
  };
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    xucXac: state.BauCuaTomCaReducer.xucXac,
    tongTien: state.BauCuaTomCaReducer.tongTien,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
