import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Hidden,
  Skeleton,
} from "@mui/material";

import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  productContainer: {
    fontSize: 16,
  },
  productImage: {
    width: "100%",
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  media: {
    height: "760px",
  },
}));
const ProductImage = ({ detailProduct, index }) => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  const isLoading = useSelector((state) => state.reducerURL.isLoading);
  var listLazyLoad = [];
  for (let i = 0; i < 6; i++) {
    listLazyLoad.push(
      <Grid item xs={6} key={i}>
        <Skeleton animation="wave">
          <img
            className={classes.productImage}
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/40c3c2d4-7449-43dc-9b44-e3ad58181da8/air-zoom-alphafly-next-flyknit-ekiden-road-racing-shoes-ZgldSQ.png"
          />
        </Skeleton>
      </Grid>
    );
  }
  // console.log(detailProduct)
  return (
    <div>
      <Hidden smDown>
        {isLoading ? (
          <Grid container className={classes.productContainer} spacing={2}>
            {listLazyLoad}
          </Grid>
        ) : (
          <Grid container className={classes.productContainer} spacing={2}>
            {detailProduct.imgDetails[index].imgs.map((item, key) => {
              return (
                <div key={key}>
                  <img className={classes.productImage} src={item.img} />
                </div>
              );
            })}
          </Grid>
        )}
      </Hidden>

      <Hidden mdUp>
        <Container maxWidth="xl">
          {detailProduct.imgDetails[index].imgs.map((item, key) => {
            return (
              <Card className={classes.image} key={key}>
                {isLoading ? (
                  <Skeleton>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={item.img}
                        title="Contemplative Reptile"
                        className={classes.media}
                      />
                    </CardActionArea>
                  </Skeleton>
                ) : (
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      item={item.img}
                      title="Contemplative Reptile"
                    />
                  </CardActionArea>
                )}
              </Card>
            );
          })}
        </Container>
      </Hidden>
    </div>
  );
};

export default ProductImage;
