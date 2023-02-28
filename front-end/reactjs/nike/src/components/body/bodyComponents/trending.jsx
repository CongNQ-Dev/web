import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
const useStyles = makeStyles({
  title: {
    fontSize: 24,
    marginBottom: 32,
  },
  contentLink: {
    color: "black",
    textDecoration: "none",
  },
  trendingContainer: {
    height: 700,
    display: "flex",
    alignItems: "flex-end",
    backgroundPosition: "center center",
  },
  info: {
    padding: 40,
  },
  trendingName: {
    color: "white",
    fontSize: 25,
    fontWeight: 400,
    marginBottom: 30,
  },
  shopLink: {
    color: "black",
    textDecoration: "none",
    margin: "0 8px 8px 0",
    padding: "8px 28px",
    backgroundColor: "white",
    borderRadius: 20,
    fontSize: 16,
    "&:hover": {
      opacity: 0.8,
    },
  },
});
const Trending = ({ dataTrending, titleTrending }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.title}>{titleTrending}</div>
      <Grid container spacing={3}>
        {dataTrending.map((item, key) => {
          return (
            <Grid item xs={12} sm={6} key={key}>
              <div className={classes.contentLink}>
                <div
                  className={classes.trendingContainer}
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div className={classes.info}>
                    <div className={classes.trendingName}>{item.title}</div>
                    <div className={classes.shopLink}>{item.button}</div>
                  </div>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default Trending;
