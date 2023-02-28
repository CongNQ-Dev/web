import React from "react";
import Body from "./body/body";

const MainContainer = (props) => {
  return (
    <div>
      <Body
        titleTrending={props.titleTrending}
        titleMoreNike={props.titleMoreNike}
        carouselImg={props.carouselImg}
        dataTrending={props.dataTrending}
        dataMoreNike={props.dataMoreNike}
        merchMenu={props.merchMenu}
      />
    </div>
  );
};

export default MainContainer;
