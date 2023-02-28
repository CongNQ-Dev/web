import React from "react";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
    marginBottom: 32,
  },
  container: {
    padding: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover": {
      overflowX: "scroll",
    },
    "&::-webkit-scrollbar": {
      backgroundColor: "#f5f5f5",
      height: 8,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "inset 0 0 6px rgba(0,0,0,0.3)",
      borderRadius: 10,
      backgroundColor: "#f5f5f5",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "inset 0 0 6px rgba(0,0,0,0.3)",
      borderRadius: 10,
      backgroundColor: "#f5f5f5",
    },
  },
  product: {
    width: 390,
    listStyle: "none",
    display: "inline-block",
    marginRight: 20,
    marginBottom: 40,
  },
  productImg: {
    "&:hover": {
      opacity: 0.7,
    },
    width: "100%",
    height: "400px",
    transition: "opacity 1s",
  },
  productDetailContainer: {
    fontSize: 16,
    display: "flex",
    marginTop: 12,
    lineHeight: 1.5,
    whiteSpace: "normal",
  },
  productDetail: {
    flex: "0 0 300px",
  },
  price: {
    flex: "1 1 auto",
  },
}));

const ProductScroll = () => {
  const classes = useStyles();

  /**useSelector la map stateToProp: useSelector hỗ trợ kết nối tới kho và đòng thời láy dữ liệu từ trong kho ra */
  const data = useSelector((state) => state.reducerURL.data);
  const isLoading = useSelector((state) => state.reducerURL.isLoading);
  const listProduct = data.slice(0, 5).map((item, key) => {
    return (
      <li className={classes.product} key={key}>
        <Link to={{ pathname: `/detailProduct/${item._id}` }}>
          <img className={classes.productImg} src={item.img} />
        </Link>
        <div className={classes.productDetailContainer}>
          <div className={classes.productDetail}>
            <div className={classes.productName}>{item.name}</div>
            <div className={classes.message}>{item.message}</div>
          </div>
          <div className={classes.price}>{item.price}</div>
        </div>
      </li>
    );
  });
  const listProductScroll = [];
  for (let i = 0; i < 6; i++) {
    listProductScroll.push(
      <li className={classes.product} key={i}>
        <Skeleton>
          <img
            className={classes.productImg}
            src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b0cccd97-5dc7-4dba-b720-ab7863109ebf/exploration-series-basketball-t-shirt-8dkWTQ.jpg"
          />
        </Skeleton>

        <div className={classes.productDetailContainer}>
          <div className={classes.productDetail}>
            <Skeleton>
              {" "}
              <div className={classes.productName}>nike</div>
            </Skeleton>
            <Skeleton>
              {" "}
              <div className={classes.message}>có không giữ mất đừng tim </div>
            </Skeleton>
          </div>
          <Skeleton>
            <div className={classes.price}>1000</div>
          </Skeleton>
        </div>
      </li>
    );
  }
  return (
    <div>
      <div className={classes.title}>{}</div>

      {isLoading ? (
        <ul className={classes.container}>{listProductScroll}</ul>
      ) : (
        <ul className={classes.container}>{listProduct}</ul>
      )}
    </div>
  );
};

export default ProductScroll;
