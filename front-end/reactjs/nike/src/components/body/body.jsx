import React from "react";
import { makeStyles } from "@mui/styles";
import Carousel from "./bodyComponents/carousel";
import Trending from "./bodyComponents/trending";
import MoreNike from "./bodyComponents/moreNike";
import ProductScroll from "./bodyComponents/productScroll";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "0 44px 50px",
  },
  bodyComponent: {
    marginTop: "85px",
  },
}));
const Body = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.bodyComponent}>
        <Carousel carouselImg={props.carouselImg} />
      </div>
      {/* trending  */}
      <div className={classes.bodyComponent}>
        <Trending
          dataTrending={props.dataTrending}
          titleTrending={props.titleTrending}
        />
      </div>
      {/* more nike  */}
      <div className={classes.bodyComponent}>
        <MoreNike
          dataMoreNike={props.dataMoreNike}
          titleMoreNike={props.titleMoreNike}
        />
      </div>
      {/* product scroll  */}
      <div className={classes.bodyComponent}>
        <ProductScroll />
      </div>
    </div>
  );
};

export default Body;
