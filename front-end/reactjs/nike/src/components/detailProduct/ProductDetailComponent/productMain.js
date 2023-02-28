import React from "react";
import { makeStyles } from "@mui/styles";
import { Alert, Grid, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  ProductContainer: {
    padding: "0 44px",
    fontSize: 16,
    lineHeight: 1.7,
    // [theme.breakpoints.down("md")]: {
    //   padding: "0 8px",
    // },
  },
  ProductImage: {
    width: "100%",
  },
  ShoesType: {
    fontSize: 16,
    marginBottom: 4,
  },
  ShoesName: {
    fontSize: 28,
  },
  Price: {
    fontSize: 16,
    textAlign: "right",
  },
  Size: {
    margin: "20px 0 12px",
  },
  SelectSize: {
    fontSize: 16,
  },
  AlertSelectSize: {
    fontSize: 16,
    color: "rgb(212, 63, 33)",
  },
  SizeGuide: {
    fontSize: 16,
    color: "#757575",
    textAlign: "right",
  },
  SizeRadio: {
    position: "absolute",
    opacity: 0,
    width: 0,
    height: 0,
  },
  SizeLabel: {
    fontSize: 16,
    padding: "10px 0 10px 0",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "20px",
    "&:hover": {
      boxShadow: "0 0 0 2px black",
      borderRadius: 2,
    },
  },
  SizeLabelChecked: {
    boxShadow: "rgb(17, 17, 17) 0px 0px 0px 1px inset",
    padding: "10px 0 10px 0",
    fontSize: 16,
    padding: "10px 0 10px 0",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "20px",
  },
  AddtoBag: {
    width: "100%",
    color: "white",
    backgroundColor: "black",
    padding: "18px 24px",
    borderRadius: "30px",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
  Favorite: {
    width: "100%",
    color: "black",
    backgroundColor: "transparent",
    padding: "18px 24px",
    borderRadius: "30px",
    border: "1px #ccc solid",
    outline: "none",
    cursor: "pointer",
  },
  FavoriteBorderIcon: {
    height: 15,
  },
  ProductLink: {
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: 16,
  },
  ProductColorway: {
    display: "none",
  },
  ProductColorwayImage: {
    width: "100px",
    height: "100px",
    border: "1px solid rgb(17, 17, 17)",
    borderRadius: "4px",
    opacity: 1,
  },
  ProductColorwayImageHide: {
    width: "100px",
    height: "100px",
    borderRadius: "4px",
    opacity: 0.8,
  },
  CheckSize: {
    boxShadow: "rgb(212, 63, 33) 0px 0px 0px 1px",
    padding: "1px",
    borderRadius: "4px",
  },
  AlertSize: {
    margin: "20px 0px",
  },
  AddtoBagNotAllow: {
    cursor: "not-allowed",
    width: "100%",
    color: "white",
    backgroundColor: "black",
    padding: "18px 24px",
    borderRadius: "30px",
    border: "none",
    outline: "none",
  },
}));

const ProductMain = ({ detailProduct, getIndexImg, indexPress }) => {
  const classes = useStyles();
  const [size, setSize] = React.useState("");
  const [flag, setFlag] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value } = e.target;
    setSize(value);
  };
  const checkSize = () => {
    if (size === "") {
      setFlag(true);
      return;
    }
    setFlag(false);
  };
  const listSize = detailProduct.sizes.map((item, index) => {
    return (
      <Grid key={index} item xs={4}>
        <label>
          <input
            type="radio"
            name="box"
            value={item.size}
            className={classes.SizeRadio}
            onChange={handleChange}
            onBlur={checkSize}
          />
          <div
            className={
              size === item.size ? classes.SizeLabelChecked : classes.SizeLabel
            }
          >
            {item.size}
          </div>
        </label>
      </Grid>
    );
  });
  const listSizeLazyLoad = detailProduct.sizes.map((item, index) => (
    <Grid item xs={4} key={index}>
      <Skeleton width="100%">
        <label>
          <input
            type="radio"
            name="box"
            value={item.size}
            className={classes.SizeRadio}
          />
          <div className={classes.SizeLabel}>{item.size}</div>
        </label>
      </Skeleton>
    </Grid>
  ));
  const isLoading = useSelector((state) => state.reducerURL.isLoading);
  return (
    <Grid container className={classes.ProductContainer} spacing={2}>
      <Grid item xs={8}>
        {isLoading ? (
          <Skeleton>
            <div className={classes.ShoesType}>Men's shoes</div>
          </Skeleton>
        ) : (
          <div className={classes.ShoesType}>Men's shoes</div>
        )}
        {isLoading ? (
          <Skeleton>
            <div className={classes.ShoesName}> {detailProduct.name} </div>
          </Skeleton>
        ) : (
          <div className={classes.ShoesName}> {detailProduct.name} </div>
        )}
      </Grid>
      <Grid item xs={4}>
        {isLoading ? (
          <Skeleton>
            <div className={classes.Price}>
              {detailProduct.price.toLocaleString()}đ
            </div>
          </Skeleton>
        ) : (
          <div className={classes.Price}>
            {detailProduct.price.toLocaleString()}đ
          </div>
        )}
      </Grid>
      {detailProduct.imgDetails.map((item, index) => {
        return (
          <Grid key={index} item xs={4}>
            {isLoading ? (
              <Skeleton>
                <img
                  src={item.imgs[0].img}
                  className={classes.ProductColorwayImage}
                />
              </Skeleton>
            ) : (
              <img
                src={item.imgs[0].img}
                className={
                  indexPress === index
                    ? classes.ProductColorwayImage
                    : classes.ProductColorwayImageHide
                }
                onClick={() => {
                  getIndexImg(index);
                }}
              />
            )}
          </Grid>
        );
      })}
      <Grid item xs={12}>
        <Grid container className={classes.size} spacing={2}>
          <Grid
            item
            xs={6}
            className={flag ? classes.AlertSelectSize : classes.SelectSize}
          >
            {isLoading ? (
              <Skeleton width="100%">Select size</Skeleton>
            ) : (
              <span>select Guide</span>
            )}
          </Grid>
          {isLoading ? listSizeLazyLoad : listSize}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductMain;
