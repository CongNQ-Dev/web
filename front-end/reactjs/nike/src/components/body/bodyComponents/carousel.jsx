import React from "react";
import { makeStyles } from "@mui/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from "@mui/material/Container";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
}));
const Carousel = ({ carouselImg }) => {
  const classes = useStyles();

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
  };
  return (
    <div>
      <Container maxWidth="xl">
        <Grid item xs={12}>
          <Slider {...settings}>
            {carouselImg.map((item, key) => {
              return (
                <React.Fragment key={key}>
                  <Card className={classes.image}>
                    <CardActionArea>
                      <CardMedia component="img" image={item} title="" />
                      {/* media khong ho tro render ra hinh anh  */}
                    </CardActionArea>
                  </Card>
                </React.Fragment>
              );
            })}
          </Slider>
        </Grid>
      </Container>
    </div>
  );
};

export default Carousel;
